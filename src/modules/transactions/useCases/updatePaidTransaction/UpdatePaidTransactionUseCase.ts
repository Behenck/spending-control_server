import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class UpdatePaidTransactionUseCase {
  /* eslint-disable */
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
) {}
  /* eslint-enable */

  async execute(id: string) {
    const paid = await this.transactionsRepository.findByPaid(id)
    await this.transactionsRepository.updatePaid(id, paid)
  }
}

export { UpdatePaidTransactionUseCase }
