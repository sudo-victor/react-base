/* eslint class-methods-use-this: 0 */
import axios from 'axios'
import { Auth } from 'aws-amplify'
import { HttpRequest, HttpResponse } from '../../../domain/interfaces/http-client'

export class AxiosHttpClient {
  api: any

  constructor(private readonly baseUrl: string | undefined) {
    const api = axios
    api.interceptors.response.use(this.handleSuccess, this.handleError)
    this.api = api
  }

  async request({
    headers, method, url, data, params,
  }: HttpRequest): Promise<HttpResponse> {
    let axiosResponse

    try {
      const token = await this.updateAmplifyToken()
      axiosResponse = await this.api.request({
        url: this.baseUrl + url,
        method,
        data,
        headers: {
          ...token,
          ...headers,
        },
        params,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }

  updateAmplifyToken = async (): Promise<object> => {
    try {
      const session = await Auth.currentSession()
      return {
        Authorization: session.getIdToken().getJwtToken(),
      }
    } catch (_) {
      return {}
    }
  }

  handleSuccess = (response: any): object => response

  handleError = (error: { response: { status: any } }): Promise<object> => {
    const { status } = error.response
    switch (status) {
      case 401:
        // this.redirectTo(document, '/sair')
        break
      case 403:
        // this.redirectTo(document, '/403')
        break
      case 404:
        // this.redirectTo(document, '/404')
        break
      default:
        // this.redirectTo(document, '/404')
    }
    return Promise.reject(error)
  }

  redirectTo = (document: { location: object }, path: any): void => {
    // eslint-disable-next-line no-param-reassign
    document.location = path
  }
}
