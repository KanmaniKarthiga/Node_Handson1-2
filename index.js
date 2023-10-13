const http = require("http")
const jsonData = require("./jsonData")
const data = JSON.stringify(jsonData)

const app = http.createServer((req,res) =>{
    if(req.url === "/post" && req.method === "GET"){
        res.write("<h1>What is Node?</h1>")
        res.write("<p>Node is a open-source, cross-platform javasrcipt front-end environment that executes javasrcipt code outside the web browser. It has a run-time environment.Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.</p>")
        res.end();
    }
    else if(req.url === "/comment" && req.method === "GET"){
        res.write(data)
        res.end()
    }
    else{
        res.write("404 - Page not found")
        res.end();
    }
})

app.listen(5000, (req,res) =>{
    try{
        console.log("Server is running")
    }
    catch(err){
        console.log("Error occured while starting the server")
    }
})