import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  title: string
  description?: string
  price: number
  type: 'income' | 'outcome'
  repeat?: boolean
  repeatRecurrent?: string
  repeatFixed?: boolean
  nRepeat?: number
  dueDate: Date
  bankName?: string
  userId: string
  categoryId?: string
}

@injectable()
class CreateTransactionUseCase {
  /* eslint-disable */
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}
  /* eslint-enable */

  async execute({
    title,
    description,
    price,
    type,
    repeat,
    repeatRecurrent = '',
    repeatFixed = false,
    nRepeat = 0,
    dueDate,
    bankName = '',
    userId,
    categoryId = '',
  }: IRequest): Promise<void> {
    await this.transactionsRepository.create({
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
  }
}

export { CreateTransactionUseCase }
