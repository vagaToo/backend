import {
  OccupationArea,
  OccupationAreaCreateDTO,
} from '../../models/occupationArea'

export interface ICreateOccupationAreaUsecase {
  execute: (occupationArea: OccupationAreaCreateDTO) => Promise<OccupationArea>
}
