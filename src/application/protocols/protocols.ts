export interface IBaseHttpRequest {
  body?: any
  headers?: any
  params?: any
  query?: any
}

export interface IBaseHttpResponse {
  status: number
  data?: unknown
  customHeaders?: Map<string, string>
}

export interface IBaseController {
  handle: (httpRequest: IBaseHttpRequest) => Promise<IBaseHttpResponse>
}
