import express from 'express'
const app = express()

app.get('/', async (req, res, next) => {
  try {
    res.json({ message: 'Hello' })
  } catch (e) {
    console.error(e)
    res.status(500).send({message: 'Deu ruim!!!', err: e.stack})
  }
})

export default app
