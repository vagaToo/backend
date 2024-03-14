import { makeCreateOccupationAreaUsecase } from '../../usecases/occupationArea/makeCreateOccupationAreaUsecase'
import { CreateOccupationAreaController } from '../../../../presentation/controllers/occupationArea/createOccupationAreaController'

export const makeCreateOccupationAreaController = () => {
  return new CreateOccupationAreaController(makeCreateOccupationAreaUsecase())
}
