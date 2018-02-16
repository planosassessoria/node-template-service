import { MongoClient } from 'mongodb'
const configs = require('../configs')
const MONGO_CONFIGS = configs.MONGO_CONFIGS
const URL = `mongodb://${MONGO_CONFIGS.USER}:${MONGO_CONFIGS.PASSWORD}@${MONGO_CONFIGS.IP}:${MONGO_CONFIGS.PORT}/${MONGO_CONFIGS.DATABASE}`

let connection = null

const getConexao = () => {
  if (connection) {
    return connection
  } else {
    let err = new Error('A conexão é nula!!')
    err.stack = 'Não existe nenhuma conexão ou pool de conexões abertos.'
    throw err
  }
}

const createConnection = async () => {
  console.log('aa')
  try {
    connection = await MongoClient.connect(URL)
    return {message: 'Connected'}
  } catch (e) {
    throw e
  }
}

export {
  getConexao,
  createConnection
}

export default {
  getConexao,
  createConnection
}
