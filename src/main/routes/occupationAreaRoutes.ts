import express from 'express'
import { adaptExpressRoute } from '../adapters/express/expressControllerAdapter'
import { makeCreateOccupationAreaController } from '../factories/controllers/occupationArea/makeCreateOccupationAreaController'

const occupationAreaRoute = express.Router()

occupationAreaRoute.post(
  '/create',
  adaptExpressRoute(makeCreateOccupationAreaController()),
)

export default occupationAreaRoute
