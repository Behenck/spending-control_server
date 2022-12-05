import { Category } from '@modules/transactions/infra/prisma/entities/Category'
import { ICategoriesRepository } from '@modules/transactions/repositories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class ShowCategoriesUseCase {
  /* eslint-disable */
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}
  /* eslint-enable */

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.show()

    return categories
  }
}

export { ShowCategoriesUseCase }
