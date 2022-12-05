import { ICreateTransactionsDTO } from '@modules/transactions/dtos/ICreateTransactionsDTO'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const {
      title,
      description,
      price,
      type,
      repeat,
      repeatRecurrent,
      repeatFixed,
      nRepeat,
      dueDate,
      bankName,
      userId,
      categoryId,
    }: ICreateTransactionsDTO = request.body

    const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

    await createTransactionUseCase.execute({
      title,
      description,
      price,
      type,
      repeat,
      repeatRecurrent,
      repeatFixed,
      nRepeat,
      dueDate,
      bankName,
      userId,
      categoryId,
    })

    return response.status(201).send()
  }
}

export { CreateTransactionController }
