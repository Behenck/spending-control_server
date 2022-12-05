import express from 'express'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'

import '@shared/container'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.use(router)

export { app }
