import { Request, Response } from 'express'
import {
  IBaseController,
  IBaseHttpRequest,
} from '../../../application/protocols/protocols'

export const adaptExpressRoute = (baseController: IBaseController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IBaseHttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
    }

    try {
      const response = await baseController.handle(httpRequest)
      for (const header of response.customHeaders || []) {
        res.set(header[0], header[1])
      }
      return res.status(response.status).send(response.data)
    } catch (error) {
      console.log(error)
      return res.status(500).send()
    }
  }
}
