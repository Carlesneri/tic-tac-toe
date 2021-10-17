import dotenv from 'dotenv'

dotenv.config()

export const PORT = 3001
export const DB_URI = process.env.DB_URI
export const SECRET = process.env.SECRET
export const COOKIE_SESSION_NAME = 'tic-tac-toe.sid'
