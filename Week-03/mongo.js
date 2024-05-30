const mongoose = require('mongoose');
const express = require('express');
mongoose.connect('mongodb+srv://vaibhavmahajan2257:233257V%40i@cluster0.10mvk7d.mongodb.net/userDummyTable');
const app = express();
const userModel  =  mongoose.model('User',{username:String,password:String,email:String});

app.post('/signup',async (req,res)=>{
    const username = 'vaibhrtwav';
    const password = '102313';
    const email = 'vaibgsdgfhav@gamil.com'

     const existingUser =  await userModel.find({email:email,username:username});
     if(!existingUser){
        return res.json({
            msg:"user already exist"
        })
     } 
     const user = new userModel({
        username,password,email
     })
     user.save();
     res.json({
        msg:"user created successfully"
     })

})

app.listen(3000);