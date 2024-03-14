import { IBaseHttpResponse } from '../../application/protocols/protocols'

export type RequestError = {
  errorMessage?: string
}

export const notImplementedYet = (
  errorData?: RequestError,
): IBaseHttpResponse => {
  return {
    status: 501,
    data: getErrorData('Not implemented yet', errorData),
  }
}

export const badRequest = (errorData?: RequestError): IBaseHttpResponse => {
  return {
    status: 400,
    data: getErrorData('Bad request', errorData),
  }
}

export const unauthorized = (errorData?: RequestError): IBaseHttpResponse => ({
  status: 401,
  data: getErrorData('Unauthorized', errorData),
})

export const forbidden = (errorData?: RequestError): IBaseHttpResponse => ({
  status: 403,
  data: getErrorData('Forbidden', errorData),
})

export const notFound = (errorData?: RequestError): IBaseHttpResponse => ({
  status: 404,
  data: getErrorData('Not found', errorData),
})

export const ok = (data?: unknown): IBaseHttpResponse => ({
  status: 200,
  data,
})

export const accepted = (data?: unknown): IBaseHttpResponse => ({
  status: 202,
  data,
})

export const noContent = (): IBaseHttpResponse => ({
  status: 204,
})

export const unespectedError = (message?: string): IBaseHttpResponse => ({
  status: 500,
  data: message,
})

const getErrorData = (defaultMessage: string, errorData?: RequestError) => ({
  message: errorData?.errorMessage || defaultMessage,
})

export const apiKeyHeader = 'X-THOR-API-TOKEN'
