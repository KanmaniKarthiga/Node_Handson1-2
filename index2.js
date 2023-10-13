const express = require("express")

const app = express()
const postRouter = require("./router/postRouter")
app.use("/api/main",postRouter)

app.listen(5001,() =>{
    try{
        console.log("Server is running")
    }
    catch(err){
        console.log("Error occured while starting the server")
    }
})

