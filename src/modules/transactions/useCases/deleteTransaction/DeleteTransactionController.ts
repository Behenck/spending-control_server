import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteTransactionUseCase } from './DeleteTransactionUseCase'

class DeleteTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteTransactionUseCase = container.resolve(DeleteTransactionUseCase)

    await deleteTransactionUseCase.execute(id)

    return response.status(200).send()
  }
}

export { DeleteTransactionController }
