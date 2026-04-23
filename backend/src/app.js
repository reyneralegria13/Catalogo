import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { env } from './config/env.js'
import apiRoutes from './routes/index.js'
import { requestLogger } from './middlewares/requestLogger.js'
import { notFound } from './middlewares/notFound.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()

app.disable('x-powered-by')

app.use(helmet())
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  }),
)
app.use(express.json({ limit: '1mb' }))
app.use(requestLogger)

app.use('/api', apiRoutes)
app.use(notFound)
app.use(errorHandler)

export default app
