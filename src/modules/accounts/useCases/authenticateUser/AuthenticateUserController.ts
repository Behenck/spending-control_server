import 'reflect-metadata'
import { container } from 'tsyringe'

import { Request, Response } from 'express'

import { z } from 'zod'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserBody = z.object({
      access_token: z.string(),
    })

    /* eslint-disable */
    const { access_token } = createUserBody.parse(request.body)

    const authenticateUserUserCase = container.resolve(AuthenticateUserUseCase)

    const token = await authenticateUserUserCase.execute(access_token)
    /* eslint-enable */
    return response.json(token)
  }
}

export { AuthenticateUserController }
