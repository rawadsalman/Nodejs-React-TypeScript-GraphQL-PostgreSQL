import bodyParser from 'body-parser'
 import { createNamespace } from 'cls-hooked'
 import compress from 'compression'
import cors from 'cors'
import express from 'express'
import { v4 as uuid } from 'uuid'
import logger from '../logger'
import * as mw from '../middleware'
import routes from './../index.routes'
import config from './env'


const loggerNamespace = createNamespace('logger')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
/* app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
 */
app.use(compress())
app.use(mw.clsRequestId(loggerNamespace, uuid))
app.use(mw.logRequests(logger))

app.use('/', routes);

app.use(mw.apierror)

export default app
