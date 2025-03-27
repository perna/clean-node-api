import type { HttpResponse } from '../protocols/http'

const BAD_REQUEST_CODE = 400

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: BAD_REQUEST_CODE,
  body: error,
})
