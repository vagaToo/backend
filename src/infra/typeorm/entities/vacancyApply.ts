import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({ name: 'vacancyApply' })
export class VacancyApply {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  candidateName: string

  @Column({ length: 100 })
  candidateEmail: string

  @Column({ length: 50 })
  candidateCellphone: string

  @OneToOne(() => VacancyApply)
  @JoinColumn()
  vacancyId: VacancyApply
}
