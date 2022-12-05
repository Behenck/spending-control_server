import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { User } from '@modules/accounts/prisma/entities/User'

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>
  findByGoogleId(googleId: string): Promise<User>
}

export { IUsersRepository }
