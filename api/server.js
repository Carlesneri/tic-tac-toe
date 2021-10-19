import express from 'express'
import gameRoutes from './routes/game.js'
import cors from 'cors'
import session from 'express-session'
import { COOKIE_SESSION_NAME, SECRET } from './config.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
  origin: ['http://localhost:3000', 'https://nerione.xyz'],
  methods: 'GET, POST, DELETE',
  credentials: true
}))

app.use(cookieParser())

app.use(session({
  secret: SECRET,
  resave: true,
  saveUninitialized: true,
  name: COOKIE_SESSION_NAME,
  secure: false
}))

app.use(express.static('../app/dist'))

app.use(express.json())

app.use('/game', gameRoutes)

export default app
