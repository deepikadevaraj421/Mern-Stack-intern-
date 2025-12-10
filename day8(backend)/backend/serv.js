//--express example--//
require("dotenv").config();
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err));

const express=require("express") //import express
const server=express()           //create server using express
server.get('/about',(req,res)=>{
    res.end("node server running with express");
}) .listen(4000);                            // "/"=>helps to navigate to the first page 
//server is created using express we have to mention whict port to listern