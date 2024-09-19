import { getWeekPendingGoals } from '@/functions/get-week-pending-goal'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/pending-goals',
    {
      schema: {
        response: {
          200: z.object({
            pendingGoals: z.array(
              z.object({
                id: z.string(),
                title: z.string(),
                desiredWeeklyFrequency: z.number(),
                completionCount: z.number().int().nonnegative(),
              })
            ),
          }),
        },
        summary: 'Get goals pendings',
        description:
          'Responsible for retrieve goals pendings, returning id, title, desired weekly frequency and count completed',
        tags: ['info-goals'],
      },
    },
    async () => {
      const { pendingGoals } = await getWeekPendingGoals()

      return {
        pendingGoals,
      }
    }
  )
}
