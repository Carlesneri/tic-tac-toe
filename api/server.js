import express from 'express'
import gameRoutes from './routes/game.js'

const app = express()

app.use(express.json())

app.use(express.static('../app/dist'))

app.use('/game', gameRoutes)

export default app
