import fs from 'fs'

const mapSchemas = async () => {
  try {
    const schemas = fs.readdirSync(`${__dirname}`)
      .filter(file => file !== 'index.js')
      .map(file => {
        return import(`${__dirname}/${file}`)
      })
    const response = await Promise.all(schemas)
    const modules = response.reduce((acc, curr) => {
      return {
        ...acc,
        ...curr
      }
    }, {})
    return modules
  } catch (e) {
    throw e
  }
}

export default mapSchemas
