import mongoose from 'mongoose'
import app from './server.js'
import { PORT, DB_URI } from './config.js'

const { connect: dbConnect } = mongoose

dbConnect(DB_URI, () => {
  console.log('DB connected')
})

app.listen(PORT, () => {
  console.log('App listening on port %d', PORT)
})
