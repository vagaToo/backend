import 'reflect-metadata'
import express, { json } from 'express'
import cors from 'cors'
import { config } from './config'
import { initDatabase } from './infra/typeorm/dataSource'

const app = express()
app.use(json())
app.use(cors())

initDatabase()

app.get('/', (req, res) => {
  res.send('hello word')
})

app.listen(config.PORT, () => {
  console.log('running in port', config.PORT)
})
