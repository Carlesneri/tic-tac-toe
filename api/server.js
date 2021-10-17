import express from 'express'
import gameRoutes from './routes/game.js'
import cors from 'cors'
import session from 'express-session'
import { COOKIE_SESSION_NAME, SECRET } from './config.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())

app.use(cookieParser())

app.use(session({
  secret: SECRET,
  resave: true,
  saveUninitialized: true,
  name: COOKIE_SESSION_NAME
}))

app.use(express.json())

app.use(express.static('../app/dist'))

app.use('/game', gameRoutes)

export default app
