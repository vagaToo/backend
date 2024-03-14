import { OccupationAreaRepository } from '@repository'
import { AppDataSource } from '@dataSource'
import { OccupationAreaEntity } from '@entity'

export const makeOccupationAreaRepository = () => {
  return new OccupationAreaRepository(
    AppDataSource.getRepository(OccupationAreaEntity),
  )
}
