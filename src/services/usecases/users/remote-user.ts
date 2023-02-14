import { AccessDeniedError } from "../../../domain/errors/access-denied-error"
import { UnauthorizedError } from "../../../domain/errors/unauthorized-error"
import { UnexpectedError } from "../../../domain/errors/unexpected-error"
import { UserExistsError } from "../../../domain/errors/user-already-exists-error"
import { HttpStatusCode } from "../../../domain/interfaces/http-client"

export class RemoteUser {
  url: string

  httpClient: any

  constructor(url: string, httpClient: any) {
    this.url = url
    this.httpClient = httpClient
  }

  async load(params?: any) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: { ...params },
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }

  async post(body: any) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      data: body,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      case HttpStatusCode.created: return httpResponse.body
      case HttpStatusCode.badRequest: throw new UserExistsError()
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }

  async patch(id: number, body: any) {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'patch',
      data: body,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}
