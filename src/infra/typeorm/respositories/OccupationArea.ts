import { Repository } from 'typeorm'
import { AppDataSource } from '../dataSource'
import { OccupationAreaEntity } from '../entities/occupationArea'

export class OccupationAreaRepository {
  repository: Repository<OccupationAreaEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(OccupationAreaEntity)
  }

  getMany() {
    return this.repository.find()
  }
}
