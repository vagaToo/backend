import express from 'express'

const occupationAreaRoute = express.Router()

occupationAreaRoute.get('/', (req, res) => {
  res.send('Hello')
})

export default occupationAreaRoute
