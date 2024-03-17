import {
  OccupationArea,
  OccupationAreaCreateDTO,
} from '../../models/occupationArea'
import { IOccupationAreaRepository } from '../../repositories'

export interface ICreateOccupationAreaUsecase {
  execute: (occupationArea: OccupationAreaCreateDTO) => Promise<OccupationArea>
}

export class CreateOccupationAreaUsecase
  implements ICreateOccupationAreaUsecase
{
  occupationAreaRepository: IOccupationAreaRepository

  constructor(occupationAreaRepository: IOccupationAreaRepository) {
    this.occupationAreaRepository = occupationAreaRepository
  }

  execute(occupationArea: OccupationAreaCreateDTO) {
    return this.occupationAreaRepository.create(occupationArea)
  }
}
