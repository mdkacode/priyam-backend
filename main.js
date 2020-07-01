const fileSystem = require('fs')
const express = require("express") // es 5 way 
        // OR
// import express from 'express'; // es 6 way


const app = express()

const port = 8089
app.use(express.static("trend"));

app.get('/priyam', (req,res)=>{

    fileSystem.readdir('/home/mayank/priyam/trend',(err,files)=>{
        if(err)  res.status(500).json({message:"Something went wrong"});
         let tiktokFiles = [];
         files.map((fileName,index)=>{
            tiktokFiles.push({ fileName  })
            if (index == files.length -1){
                res.json({userid:1,vedios:tiktokFiles});
            }
         } )
         
     })
  
    
})


app.listen(port,()=> console.log(`APPLICATION RUNING on ${port}`))
