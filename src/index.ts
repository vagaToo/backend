import express, { json } from 'express'
import { config } from './config'

const app = express()
app.use(json())

app.get('/', (req, res) => {
  res.send('hello word')
})

app.listen(config.PORT, () => {
  console.log('running in port', config.PORT)
})
