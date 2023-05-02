
require("dotenv").config()
const express=require("express");
const app=express();





app.get ('/',(req,res)=>{
    res.send("hello world ")
})
const Port=process.env.Port || 9000;

app.listen(Port,()=>{
 console.log(`server running at ${Port}`)   
})


