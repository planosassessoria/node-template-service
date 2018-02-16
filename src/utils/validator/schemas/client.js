import Joi from 'joi'

const client = Joi.object().keys({
  nome: Joi.string().required(),
  idade: Joi.number().integer().required(),
  peso: Joi.number().precision(2).required()
})

export default {
  client
}

export {
  client
}
