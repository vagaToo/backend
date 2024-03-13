import { Repository } from 'typeorm'
import { AppDataSource } from '../dataSource'
import { OccupationAreaEntity } from '../entities/occupationArea'
import { OccupationArea } from '../../../application/models/occupationArea'

export class OccupationAreaRepository {
  repository: Repository<OccupationAreaEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(OccupationAreaEntity)
  }

  getMany() {
    return this.repository.find()
  }

  create(ocuparionArea: Omit<OccupationArea, 'id'>) {
    return this.repository.save(ocuparionArea)
  }
}
