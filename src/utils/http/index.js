import axios from 'axios'
const configs = require('../../configs')

const client = axios.create({
  headers: { 'Authorization': configs.TOKEN_API }
})

export default {
  client
}

export {
  client
}
