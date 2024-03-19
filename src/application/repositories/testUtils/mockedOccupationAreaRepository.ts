import { Repository } from 'typeorm'
import { IOccupationAreaRepository } from '../../../application/repositories'
import { makeOccupationArea } from '../../models/testUtils/makeOcupationArea'

export class MockedOccupationAreaRepository
  implements IOccupationAreaRepository
{
  async getMany() {
    return []
  }

  async create() {
    return makeOccupationArea()
  }
}
