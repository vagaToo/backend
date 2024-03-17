export interface OccupationArea {
  id: number
  name: string
}

export type OccupationAreaCreateDTO = Omit<OccupationArea, 'id'>
