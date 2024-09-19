import { createGoal } from '@/functions/create-goal'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().min(1).max(7),
        }),
        summary: 'Create an goal',
        description:
          'Responsible for creating the goal, informing the title and maximum number of desired week frequency',
        tags: ['create-goals'],
      },
    },
    async request => {
      const { title, desiredWeeklyFrequency } = request.body

      await createGoal({
        title,
        desiredWeeklyFrequency,
      })
    }
  )
}
