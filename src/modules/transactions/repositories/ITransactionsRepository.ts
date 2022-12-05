import { Transaction } from '@modules/transactions/infra/prisma/entities/Transaction'
import { ICreateTransactionsDTO } from '../dtos/ICreateTransactionsDTO'

interface ITransactionsRepository {
  create(data: ICreateTransactionsDTO): Promise<void>
  show(): Promise<Transaction[]>
  delete(id: string): Promise<void>
  updatePaid(id: string, paid: boolean): Promise<void>
  findByPaid(id: string): Promise<boolean>
}

export { ITransactionsRepository }
