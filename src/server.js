import express from 'express'
import msg from 'gulp-messenger'
import chalk from 'chalk'
import _ from 'lodash'
import logger from 'morgan'
import bodyParser from 'body-parser'
import routes from './routes'
import tokenChecker from './middlewares/tokenChecker'
import cors from 'cors'
// import { createConnection } from './services/Conexao'
import fileUpload from 'express-fileupload'
import { getPort } from './utils/PortChecker'

const app = express()
app.use(logger('dev'))
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }
}))
app.use(bodyParser.json())
app.use(cors())
app.use(tokenChecker)
app.use(routes)

// try {
//   createConnection()
// } catch (e) {
//   console.error(e)
// }

const startServer = async () => {
  const port = await getPort()
  app.set('port', port)
  app.listen(app.get('port'), () => {
    msg.log('\n')
    console.log(chalk.cyan('Server Started ' + new Date()))
    msg.log('\n')
    const serverInfo = chalk.yellow(`http://localhost:${app.get('port')}`)
    msg.success('=', _.pad(`Application Running On: ${serverInfo}`, 80), '=')
  })
}
startServer()
