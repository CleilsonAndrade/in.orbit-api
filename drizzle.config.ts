import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";
 
export default defineConfig({
  schema : "./src/db/schema.ts",
  out: "./.migrations",
  dialect: "mysql",
  dbCredentials: {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  }
});