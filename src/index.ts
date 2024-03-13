import 'reflect-metadata'
import express, { json } from 'express'
import { config } from './config'
import { initDatabase } from './infra/typeorm/dataSource'

const app = express()
app.use(json())

initDatabase()

app.get('/', (req, res) => {
  res.send('hello word')
})

app.listen(config.PORT, () => {
  console.log('running in port', config.PORT)
})
