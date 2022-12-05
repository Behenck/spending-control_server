import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdatePaidTransactionUseCase } from './UpdatePaidTransactionUseCase'

class UpdatePaidTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const updatePaidTransactionUseCase = container.resolve(
      UpdatePaidTransactionUseCase,
    )

    await updatePaidTransactionUseCase.execute(id)

    return response.status(200).send()
  }
}

export { UpdatePaidTransactionController }
