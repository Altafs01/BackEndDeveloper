// const http = require("http")

// const app = http.createServer((req,res)=>{
//     console.log(req.url);

//     if(req.url==="/"){
//         res.end("home");
//     }
//     else if(req.url==="/users"){
//         res.end("users");
//     }else if(req.url==="/students"){
//         res.end("students");
//     }else{
//         res.writeHead(404);
//         res.end(JSON.stringify("Not Found"))
//     }
// })

// const PORT = 4000;

// app.listen(PORT,()=>{
//     console.log(`server running on the port ${PORT}`);
// })