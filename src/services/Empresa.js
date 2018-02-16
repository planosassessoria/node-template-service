import http from '../utils/http'
const configs = require('../configs')
const EMPRESA_SERVICE = configs.API_IP

const getEmpresa = async (cnpj) => {
  try {
    const params = {
      fantasia: cnpj,
      limit: 1,
      offset: 0,
      status: 'FTS',
      ativo: true
    }
    const response = await http.client.post(`${EMPRESA_SERVICE}empresa/pesquisa`, params)
    if (response.data.data.length) {
      return response.data.data[0]
    } else {
      let err = new Error('Nenhuma empresa encontrada!')
      err.stack = 'O CNPJ passado não corresponde a nenhuma empresa!'
      throw err
    }
  } catch (e) {
    throw e
  }
}

const getBasicData = ({id, cnpj, fantasia, razaoSocial, rubricas}) => {
  const empresa = {id, cnpj, fantasia, razaoSocial, rubricas}
  return empresa
}

export default {
  getEmpresa,
  getBasicData
}

export {
  getEmpresa,
  getBasicData
}
