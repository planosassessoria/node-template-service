import portfinder from 'portfinder'
portfinder.basePort = 3000

const getPort = async () => {
  try {
    const port = await portfinder.getPortPromise()
    return port
  } catch (e) {
    throw e
  }
}

export default {
  getPort
}

export {
  getPort
}
