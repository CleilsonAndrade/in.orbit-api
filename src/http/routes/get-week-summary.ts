import { getWeekSummary } from '@/functions/get-week-summary'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/summary',
    {
      schema: {
        response: {
          200: z.object({
            summary: z.object({
              completed: z.number().int().nonnegative(),
              total: z.number().int().nonnegative(),
              goalsPerDay: z.record(
                z.string(),
                z.array(
                  z.object({
                    id: z.string(),
                    title: z.string(),
                    completedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
                  })
                )
              ),
            }),
          }),
        },
        summary: 'Get goals summary',
        description:
          'Responsible for retrieve goals summary, categorizing by days and a count of total goals and those completed returning id, title, desired weekly frequency and count completed for each goal',
        tags: ['info-goals'],
      },
    },
    async () => {
      const { summary } = await getWeekSummary()

      return { summary }
    }
  )
}
