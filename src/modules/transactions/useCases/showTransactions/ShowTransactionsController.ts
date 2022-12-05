import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ShowTransactionsUseCase } from './ShowTransactionsUseCase'

class ShowTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showTransactionsUseCase = container.resolve(ShowTransactionsUseCase)

    const transactions = await showTransactionsUseCase.execute()

    return response.json(transactions)
  }
}

export { ShowTransactionsController }
