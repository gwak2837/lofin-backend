import { Type } from '@sinclair/typebox'

import { TFastify } from '..'

export default async function routes(fastify: TFastify) {
  const schema = {
    querystring: Type.Object({
      count: Type.Optional(Type.Number()),
    }),
    body: Type.Object({
      count: Type.Optional(Type.Number()),
    }),
  }

  fastify.get('/auth', { schema }, async (req, reply) => {
    const { count } = req.query

    // const user = req.user
    // if (!user) throw UnauthorizedError('로그인 후 시도해주세요')

    return { hello: 'index' }
  })
}
