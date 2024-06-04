import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import blog from './routes/Blog'
import users from './routes/User'
import { verify } from 'hono/jwt'


const app = new Hono<{
  Bindings:{
    DATABASE_URL : string
  }
}>()

app.route('/api/v1/user/',users);
app.route('/api/v1/blog',blog)


export default app

// postgres://jkbzpqyz:UTEo57A9qagYa8y2bG3XM_fXkN1ZcwVT@flora.db.elephantsql.com/jkbzpqyz
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZTRmMjhiYTEtY2YxMC00MDUwLWJmYTAtYTAyZWQwNDRkMzMyIiwidGVuYW50X2lkIjoiNjE0NWIwNDQyZWJlY2JlNTdhYTZmMTIwZGEwZDc4Mjc4NTU5Nzg0YWNmNjU0NGIzYzgwYjBlZTcwN2YyMGRiMSIsImludGVybmFsX3NlY3JldCI6ImZhNzVkNzAzLTUwNDEtNDU5Zi1hYTdjLTNhNzI2N2QyOTY0ZiJ9.GUcZlX6nUDTYYCtMgdKO9wEtBCjtqxuxtwjDnv9T-Bw"