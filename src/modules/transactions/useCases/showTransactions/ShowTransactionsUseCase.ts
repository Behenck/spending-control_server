import { Transaction } from '@modules/transactions/infra/prisma/entities/Transaction'
import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class ShowTransactionsUseCase {
  /* eslint-disable */
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}
  /* eslint-enable */

  async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.show()

    return transactions
  }
}

export { ShowTransactionsUseCase }
