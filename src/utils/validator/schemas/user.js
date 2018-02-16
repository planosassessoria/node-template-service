import Joi from 'joi'
import { client } from './client'

const user = Joi.object().keys({
  nome: Joi.string().required(),
  idade: Joi.number().integer().required(),
  peso: Joi.number().precision(2).required(),
  clientes: Joi.array().items(client).min(1).required()
})

export default {
  user
}

export {
  user
}
