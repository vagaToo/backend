import { CreateOccupationAreaUsecase } from '../../../../application/usecases'
import { makeOccupationAreaRepository } from '../../repositories/makeOccupationAreaRepository'

export const makeCreateOccupationAreaUsecase = () => {
  return new CreateOccupationAreaUsecase(makeOccupationAreaRepository())
}
