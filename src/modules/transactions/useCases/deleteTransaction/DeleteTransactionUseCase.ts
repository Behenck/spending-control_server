import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class DeleteTransactionUseCase {
  /* eslint-disable */
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
) {}
  /* eslint-enable */

  async execute(id: string) {
    await this.transactionsRepository.delete(id)
  }
}

export { DeleteTransactionUseCase }
