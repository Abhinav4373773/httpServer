const http = require('http');
const fs =require('fs');
const server = http.createServer((req,res)=>{
    console.log("req", req.headers, "\n","Method: ", req.method, "\n","req Url: ",req.url)
    // res.writeHead(200,{'content-type':'application/json'});
    // res.end("Hello Everyone!")
    const method = req.method;
    const path = req.url;

    fs.appendFileSync('./logs/log.txt',`\n[${Date.now()}] method:${method} Path:${path}`)



    switch(method){
        case 'GET': {
            switch (path) {
                case '/':
                    res.writeHead(200);
                    return res.end(`This is HomePage as you are on ${req.url}`);
                case '/contact-us':
                    res.writeHead(200);
                    return res.end(`Welcome, \n How can we help you \n You are ${req.url}`);
            }
        }
        case 'POST': {
            switch(path){
                case "/":
                    return res.writeHead(201).end(`You have create a Post request successfully`)
                case "/tweet":
                    return res.writeHead(201).end('You have create a tweet successfully')
            }
        }
        return res.writeHead(404).end(`Page Note Found!`);
    }
});   





server.listen(8000,()=>{
    console.log(`Server is running at port 8000`)
})