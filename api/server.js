import express from 'express'
import throwRoutes from './routes/throw.js'
import gameRoutes from './routes/game.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.use(express.static('../app/dist'))

app.use(express.json())

app.use('/api/throw', throwRoutes)
app.use('/api/game', gameRoutes)

export default app
