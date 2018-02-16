import express from 'express'
import Hello from './Hello'
import User from './User'

const app = express()

app.use(
  '/v1',
  [
    Hello,
    User
  ]
)

export default app
