import { Router } from 'express'
import { saveGame, getUserGames, deleteUserGames } from '../controllers/game.js'

const router = Router()

router.post('/', saveGame)

router.get('/', getUserGames)

router.delete('/', deleteUserGames)

export default router
