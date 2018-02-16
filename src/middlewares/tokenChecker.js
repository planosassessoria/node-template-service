import jwt from 'jsonwebtoken'
const JWT_PASSWORD = require('../configs').JWT_PASSWORD
const PRODUCTION_MODE = process.env.PRODUCTION

const tokenChecker = (req, res, next) => {
  if (PRODUCTION_MODE) {
    let auth = req.headers.authorization

    if (req.path.includes('login')) {
      return next()
    }

    if (!auth || !auth.startsWith('Bearer')) {
      return res.status(401).send({ message: 'Token inválido!', err: '' })
    }

    auth = auth.split('Bearer:').pop().trim()

    jwt.verify(auth, JWT_PASSWORD, (err, data) => {
      if (err) {
        return res.status(401).send({ message: 'Sessão expirada!', err: '' })
      }

      return next()
    })
  } else {
    return next()
  }
}

export default tokenChecker
