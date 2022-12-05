import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { z } from 'zod'
import { IUsersRepository } from '../repositories/IUsersRepository'

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  /* eslint-disable*/
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  /* eslint-disable*/

  /* eslint-disable*/
  async execute(access_token: string): Promise<IResponse> {
    /* eslint-enable */

    const userResponse = await fetch(
      'https://www.googleapis.com/oauth2/v2/userinfo',
      {
        method: 'GET',
        headers: {
          /* eslint-disable*/
          Authorization: `Bearer ${access_token}`,
          /* eslint-enable */
        },
      },
    )
    /* eslint-enable */

    const userData = await userResponse.json()
    const userInfoSchema = z.object({
      id: z.string(),
      email: z.string(),
      name: z.string(),
      picture: z.string(),
    })

    const userInfo = userInfoSchema.parse(userData)

    let user = await this.usersRepository.findByGoogleId(userInfo.id)

    if (!user) {
      user = await this.usersRepository.create(userInfo)
    }

    const tokenReturn = {
      user: {
        name: user.name,
        email: user.email,
      },
      token: 'token',
    }

    return tokenReturn
  }
}

export { AuthenticateUserUseCase }
