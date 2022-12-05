import { Router } from 'express'

import { CreateTransactionController } from '@modules/transactions/useCases/createTransaction/CreateTransactionController'
import { ShowTransactionsController } from '@modules/transactions/useCases/showTransactions/ShowTransactionsController'
import { DeleteTransactionController } from '@modules/transactions/useCases/deleteTransaction/DeleteTransactionController'
import { UpdatePaidTransactionController } from '@modules/transactions/useCases/updatePaidTransaction/UpdatePaidTransactionController'

const transactionsRoutes = Router()

const createTransactionController = new CreateTransactionController()
const showTransactionsController = new ShowTransactionsController()
const deleteTransactionController = new DeleteTransactionController()

const updatePaidTransactionController = new UpdatePaidTransactionController()

transactionsRoutes.get('/', showTransactionsController.handle)
transactionsRoutes.post('/', createTransactionController.handle)
transactionsRoutes.delete('/:id', deleteTransactionController.handle)

transactionsRoutes.post('/paid/:id', updatePaidTransactionController.handle)

export { transactionsRoutes }
