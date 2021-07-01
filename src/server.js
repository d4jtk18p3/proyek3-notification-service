import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import grupRouter from './routes/Grup'
import userDeviceRouter from './routes/User_Device'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/grup', grupRouter)
app.use('/user-device', userDeviceRouter)

// error handling
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const cause = error.cause || 'Internal Server Error'
  res.status(status).json({
    message: message,
    error: status,
    cause: cause
  })
})

export default app
