import { createGoalCompletion } from '@/functions/create-goal-completion'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
        summary: 'Create an goal completion',
        description: 'Responsible for goal completion informing the goal id',
        tags: ['create-goals'],
      },
    },
    async request => {
      const { goalId } = request.body

      await createGoalCompletion({
        goalId,
      })
    }
  )
}
