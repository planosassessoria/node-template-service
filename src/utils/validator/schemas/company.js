import Joi from 'joi'

const company = Joi.object().keys({
  fantasia: Joi.string().required(),
  razaoSocial: Joi.number().integer().required(),
  peso: Joi.number().precision(2).required()
})

export default {
  company
}

export {
  company
}
