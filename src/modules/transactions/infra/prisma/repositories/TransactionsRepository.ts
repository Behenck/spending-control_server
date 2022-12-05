import { ICreateTransactionsDTO } from '@modules/transactions/dtos/ICreateTransactionsDTO'
import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository'
import { prisma } from '@shared/infra/prisma'
import { Transaction } from '../entities/Transaction'

class TransactionsRepository implements ITransactionsRepository {
  async create(data: ICreateTransactionsDTO): Promise<void> {
    await prisma.transaction.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        type: data.type,
        repeat: data.repeat,
        repeatRecurrent: data.repeatRecurrent,
        repeatFixed: data.repeatFixed,
        nRepeat: data.nRepeat,
        dueDate: data.dueDate,
        bankName: data.bankName,
        userId: data.userId,
        categoryId: data.categoryId,
      },
    })
  }

  async show(): Promise<Transaction[]> {
    const transactions = await prisma.transaction.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        category: true,
      },
    })

    return transactions
  }

  async delete(id: string): Promise<void> {
    await prisma.transaction.delete({
      where: {
        id,
      },
    })
  }

  async updatePaid(id: string, paid: boolean): Promise<void> {
    await prisma.transaction.update({
      where: { id },
      data: {
        paid: !paid,
      },
    })
  }

  async findByPaid(id: string): Promise<boolean> {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      },
    })

    return transaction.paid
  }
}

export { TransactionsRepository }
