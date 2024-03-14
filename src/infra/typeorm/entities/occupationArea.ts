import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'occupation_area' })
export class OccupationAreaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  name: string
}
