import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode , verify , sign } from "hono/jwt";
import {signinInput , signupInput} from "@vaibhavmahajan2257/medium-common"
const app = new Hono<{
    Bindings:{
      DATABASE_URL : string
      JWT_PASSWORD : string
    }
  }>()
app.post('/signup', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success}  = signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            msg: "inputs not correct"
        })
    }
    try {
       const user =  await prisma.user.create({
        data:{
            email:body.email,
            password:body.password,
            name: body.name
        }
       }
        )
        let token : string = "";
        token = await sign({id:user.id},c.env.JWT_PASSWORD);
        return c.json({
            jwt : token
        })

    } catch (error) {
        c.status(403)
        console.log(error)
        return c.json({
            error: "error while signing in"
        })
    }
})

app.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const {success}  = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        c.json({
            msg: "inputs not correct"
        })
    }
    try {
        const user =await  prisma.user.findUnique({
            where :{
                email:body.email,
                password:body.password,
                
            }
        })
        if(!user){
            c.status(403)
            return c.json({
                msg:'user does not exist'
            })
        }
        console.log(body.name)
        const token = await sign({id:user.id},c.env.JWT_PASSWORD);
        console.log(token);
        return c.json({
            jwt : token
        })
    } catch (error) {
        c.status(411);
        return c.json({
            msg:"sing in failed"
        })
    }
    
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzVlMjVhLTYyYjYtNDY4Ni05ODQ0LWZkYTczMWNmOTRmZSJ9.3TJwQU6f3015FUxj5mhnBkewl4m_Q6St1_Pyl6al8eM

export default app;