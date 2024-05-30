const express = require('express');
const zod = require('zod');

const app = express();

const mySchema = zod.array(zod.number());
const mySchema2 = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(z.literal("US")),
    kidneys: zod.array(zod.number())
})

app.post('/',(req,res)=>{
    const kidneys = req.headers.kidneys;
    const response = mySchema.safeParse(kidneys);
    if(!response.success){
        res.json({
            msg:"Wrong inputs"
        })
    }
    res.json({
        msg:"ALl is fine"
    })
})