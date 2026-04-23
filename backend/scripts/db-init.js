import 'dotenv/config'
import { spawn } from 'node:child_process'
import { resolve } from 'node:path'

const databaseUrl = process.env.DATABASE_URL
const sqlFile = resolve(process.cwd(), 'db/sql/init.sql')

if (!databaseUrl) {
  console.error('DATABASE_URL is missing. Configure it in backend/.env before running db:init.')
  process.exit(1)
}

const child = spawn('psql', [databaseUrl, '-f', sqlFile], {
  stdio: 'inherit',
})

child.on('error', (error) => {
  if (error.code === 'ENOENT') {
    console.error('psql command not found. Install PostgreSQL client tools (psql) and try again.')
    process.exit(1)
  }

  console.error('Failed to execute psql:', error.message)
  process.exit(1)
})

child.on('close', (code) => {
  process.exit(code ?? 1)
})
