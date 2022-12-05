import { ICategoriesRepository } from '@modules/transactions/repositories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
}

@injectable()
class CreateCategoryUseCase {
  /* eslint-disable */
  constructor(
    @inject("CategoriesRepository") 
    private categoriesRepository: ICategoriesRepository
  ) {}

  /* eslint-enable */
  async execute({ name }: IRequest): Promise<void> {
    await this.categoriesRepository.create({ name })
  }
}

export { CreateCategoryUseCase }
