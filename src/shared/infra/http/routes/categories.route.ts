import { CreateCategoryController } from '@modules/transactions/useCases/createCategory/CreateCategoryController'
import { ShowCategoriesController } from '@modules/transactions/useCases/showCategories/ShowCategoriesController'
import { Router } from 'express'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
const showCategoriesController = new ShowCategoriesController()

categoriesRoutes.get('/', showCategoriesController.handle)
categoriesRoutes.post('/', createCategoryController.handle)

export { categoriesRoutes }
