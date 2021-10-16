import { Router } from 'express'
import { saveGame } from '../controllers/game.js'

const router = Router()

router.post('/', saveGame)

export default router
