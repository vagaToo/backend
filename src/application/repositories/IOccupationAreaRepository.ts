import {
  OccupationArea,
  OccupationAreaCreateDTO,
} from '../models/occupationArea'

export interface IOccupationAreaRepository {
  getMany: () => Promise<OccupationArea[]>
  create: (occupationArea: OccupationAreaCreateDTO) => Promise<OccupationArea>
}
