import 'reflect-metadata'
import express, { json } from 'express'
import cors from 'cors'
import { config } from './config'
import { AppDataSource, initDatabase } from './infra/typeorm/dataSource'
import { OccupationAreaEntity } from './infra/typeorm/entities/occupationArea'
import { OccupationAreaRepository } from './infra/typeorm/repositories/OccupationArea'
import occupationAreaRoute from './main/routes/occupationAreaRoutes'

const app = express()
app.use(json())
app.use(cors())

initDatabase()

app.get('/', (req, res) => {
  res.send('hello word')
})

// TODO
app.post('/cadastro', async (req, res) => {
  await new OccupationAreaRepository(
    AppDataSource.getRepository(OccupationAreaEntity),
  ).create({ name: 'teste' })

  const response = await new OccupationAreaRepository(
    AppDataSource.getRepository(OccupationAreaEntity),
  ).getMany()

  res.send(response)
})

app.use('/occupation-area', occupationAreaRoute)

app.listen(config.PORT, () => {
  console.log('running in port', config.PORT)
})
