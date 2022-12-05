import { ICreateCategoriesDTO } from '@modules/transactions/dtos/ICreateCategoriesDTO'
import { ICategoriesRepository } from '@modules/transactions/repositories/ICategoriesRepository'
import { prisma } from '@shared/infra/prisma'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../entities/Category'

class CategoriesRepository implements ICategoriesRepository {
  async create(data: ICreateCategoriesDTO): Promise<void> {
    await prisma.category.create({
      data: {
        id: uuidV4(),
        name: data.name,
      },
    })
  }

  async show(): Promise<Category[]> {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'desc',
      },
    })

    return categories
  }
}

export { CategoriesRepository }
