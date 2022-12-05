import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { IUsersRepository } from '@modules/accounts/useCases/repositories/IUsersRepository'
import { prisma } from '@shared/infra/prisma'
import { User } from '../entities/User'

class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        googleId: data.id,
        email: data.email,
        name: data.name,
        avatarUrl: data.picture,
      },
    })

    return user
  }

  async findByGoogleId(googleId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        googleId,
      },
    })

    return user
  }
}

export { UsersRepository }
