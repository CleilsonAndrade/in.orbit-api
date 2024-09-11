import { createId } from '@paralleldrive/cuid2'
import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const goal = mysqlTable('tb_goal', {
  id: varchar('id', { length: 255 })
    .primaryKey()
    .unique()
    .$defaultFn(() => createId()),
  title: varchar('title', { length: 255 }).notNull(),
  desiredWeeklyFrequency: int('desired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
})

export const goalCompletions = mysqlTable('tb_goal_completions', {
  id: varchar('id', { length: 255 })
    .primaryKey()
    .unique()
    .$defaultFn(() => createId()),
  goalId: varchar('goal_id', { length: 255 })
    .references(() => goal.id)
    .notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
})
