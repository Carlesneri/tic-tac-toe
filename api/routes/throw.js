import { Router } from 'express'
import { getThrow } from '../controllers/throw.js'

const router = Router()

router.post('/', getThrow)

export default router
