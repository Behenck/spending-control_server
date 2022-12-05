import 'reflect-metadata'
import { container } from 'tsyringe'

import { UsersRepository } from '@modules/accounts/prisma/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/useCases/repositories/IUsersRepository'

import { ICategoriesRepository } from '@modules/transactions/repositories/ICategoriesRepository'
import { CategoriesRepository } from '@modules/transactions/infra/prisma/repositories/CategoriesRepository'

import { TransactionsRepository } from '@modules/transactions/infra/prisma/repositories/TransactionsRepository'
import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
)

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)
