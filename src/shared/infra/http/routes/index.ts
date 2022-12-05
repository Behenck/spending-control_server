import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { categoriesRoutes } from './categories.route'
import { transactionsRoutes } from './transactions.route'

const router = Router()

router.use('/transactions', transactionsRoutes)
router.use('/categories', categoriesRoutes)

router.use(authenticateRoutes)

export { router }
