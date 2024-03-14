import { Repository } from 'typeorm'
import { IOccupationAreaRepository } from '@irepository'
import { OccupationAreaEntity } from '@entity'
import { OccupationAreaCreateDTO } from '@models'

export class OccupationAreaRepository implements IOccupationAreaRepository {
  repository: Repository<OccupationAreaEntity>

  constructor(repository: Repository<OccupationAreaEntity>) {
    this.repository = repository
  }

  getMany() {
    return this.repository.find()
  }

  create(occupationArea: OccupationAreaCreateDTO) {
    return this.repository.save(occupationArea)
  }
}
