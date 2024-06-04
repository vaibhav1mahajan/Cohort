import { Hono } from "hono"

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt"
import {createBlogInput , updataBlogInput} from "@vaibhavmahajan2257/medium-common"
const app = new Hono<{
    Bindings:{
      DATABASE_URL : string
      JWT_PASSWORD : string
      userId       : string
    },
    Variables:{
        userId : string
    }
  }>()

  app.use('/*', async (c, next) => {
    const token = c.req.header('Authorization');
    if(!token){
      c.status(403);
      return c.json({
        msg: 'Invalid or no token'
      })
    }
    const jwt = token.split(" ")[1];
    const user = await verify(jwt,c.env.JWT_PASSWORD)
    if(!user){
        c.status(401);
        return c.json({error : 'unauthorized'});
    }
    // c.userId = user.id;
    if(user){
        console.log(1);
        c.set('userId',String(user.id));
        await next();
    }
  })

app.post('/', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const authorId = c.get("userId");
    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            msg: "inputs not correct"
        })
    }
   const post =  await prisma.post.create({
        data : {
            title: body.title,
            content: body.content,
            authorId:(authorId)
        }
    })
    return c.json({
        id:post.id
    });
})

app.put('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const {success} = updataBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        c.json({
            msg: "inputs not correct"
        })
    }
    try {
        
        const post =  await prisma.post.update({
             where :{
                 id : body.id
             },
             data : {
                 title: body.title,
                 content: body.content,
             }
         })
         return c.json({
             id:post.id
         });
    } catch (error) {
        c.status(411);
         return c.json({
            msg:"Post not uploded"
         })
    }
   
})

app.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.post.findMany();
    return c.json({
        blogs
    })
})

app.get('/:id',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const id = c.req.param("id");
    const body = await c.req.json();
    // const id = body.id;
    try {
        const post =  await prisma.post.findFirst({
             where : {
                 id: id
             } 
         })
         return c.json({
             post
         });
    } catch (error) {
        c.status(411)
        return c.json({
            msg:"Error while fetching blog post"
        })
    }
})



export default app;