import { Category } from '@modules/transactions/infra/prisma/entities/Category'
import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO'

interface ICategoriesRepository {
  create(data: ICreateCategoriesDTO): Promise<void>
  show(): Promise<Category[]>
}

export { ICategoriesRepository }
