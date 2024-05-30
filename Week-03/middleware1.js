const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const username = req.headers.username;
    const kidneys = req.headers.kidneys;
    const password = req.headers.password
    if(username!="vaibhav" || password!='123456'){
        res.json({
            msg:"Invalid username"
        })
    }
    if(kidneys==2 || kidneys==2){
        res.status(200).json({
            msg:"Your health is ok"
        })
    }
})

app.listen(3000);