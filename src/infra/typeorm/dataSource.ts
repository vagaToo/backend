import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { OccupationAreaEntity } from './entities/occupationArea'
import { config } from '../../config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.DB_HOST,
  port: Number(config.DB_PORT) || 5432,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  entities: [OccupationAreaEntity],
  synchronize: true,
  logging: false,
})

export const initDatabase = () => {
  // to initialize the initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log(error))
}
