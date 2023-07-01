
import { create } from '../controllers/pizza.controller'
import { Router } from 'express'

const router = Router()

router.post('/create/:type', create)
// router.post('/login', login)
// router.post('/changeLogger', changeLogger)
// router.post('/changeCripto', changeCripto)

export default router
