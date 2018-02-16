import Joi from 'joi'
import mapSchemas from './schemas'

const validate = (obj) => {
  return {
    withSchema: async (schemaName) => {
      try {
        const validations = await mapSchemas()
        const result = Joi.validate(obj, validations[schemaName])
        if (result.error) {
          const err = new Error()
          err.message = 'Ocorreu um erro na validação dos dados!'
          err.stack = result.error.details[0].message
          err.details = result.error.details
          throw err
        }
        return result
      } catch (e) {
        throw e
      }
    }
  }
}

export default {
  validate
}

export {
  validate
}
