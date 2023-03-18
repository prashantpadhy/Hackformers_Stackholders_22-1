const Router = require('express').Router()

Router.post('/login' , (req,res)=>{
    res.send("Login")
})


Router.post("/signup" , (req,res)=>{
    
})
exports.module = Router