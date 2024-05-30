const express = require('express');
const app = express();

function userMiddleWare(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password
    if(username!="vaibhav" || password!='123456'){
        res.json({
            msg:"Invalid username"
        })
    }
    next();
}
function kidneyMiddleWare(req,res,next){
    const kidneys = req.headers.kidneys;
    if(kidneys!=2 || kidneys!=2){
        res.status(200).json({
            msg:"kidneys are not fine"
        })
  
  }
  next();
}
app.get('/',userMiddleWare,kidneyMiddleWare,(req,res)=>{
        res.json({
            msg:"Your kidneys are fine"
        })
})

app.listen(3000)