import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { OccupationAreaEntity } from './occupationArea'

@Entity({ name: 'vacancy' })
export class VacancyEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  title: string

  @Column({ type: 'text' })
  description: string

  @Column({ length: 100 })
  companyName: string

  @OneToOne(() => OccupationAreaEntity)
  @JoinColumn()
  occupationArea: OccupationAreaEntity
}
