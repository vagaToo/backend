import { AppDataSource } from '../../../infra/typeorm/dataSource'
import { OccupationAreaEntity } from '../../../infra/typeorm/entities'
import { OccupationAreaRepository } from '../../../infra/typeorm/repositories'

export const makeOccupationAreaRepository = () => {
  return new OccupationAreaRepository(
    AppDataSource.getRepository(OccupationAreaEntity),
  )
}
