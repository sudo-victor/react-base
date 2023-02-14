/* eslint-disable no-unused-vars */
export type HttpRequest = {
  url: string
  method: HttpMethod
  data?: object
  headers?: object
  params?: object
}

export interface HttpClient<R = object> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

// eslint-disable-next-line no-shadow
export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  unprocessableEntity = 422,
  serverError = 500
}

export type HttpResponse<T = object> = {
  statusCode: HttpStatusCode
  body?: T
}
