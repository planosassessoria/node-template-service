import express from 'express'
import { validate } from '../utils/validator'

const app = express()

app.get('/user', async (req, res, next) => {
  try {
    res.json({ message: 'user' })
  } catch (e) {
    console.error(e)
    res.status(500).send({message: 'Deu ruim!!!', err: e.stack})
  }
})

app.post('/user', async (req, res, next) => {
  try {
    await validate(req.body).withSchema('user')
    res.json(req.body)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
})

export default app
