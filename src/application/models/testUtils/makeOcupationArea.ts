import { OccupationArea } from '../occupationArea'
import { chance } from './chance'

export const makeOccupationArea = (): OccupationArea => {
  return {
    id: chance.integer(),
    name: chance.name(),
  }
}
