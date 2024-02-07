const http = require ("http")

// importing controller 

const homeController = require ("./CRUD/controller/HomeController");

const userController = require("./controller/UserController")


const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4002");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");


    if (req.url == "/") {
        homeController.home(req, res);
      } else if (req.url.includes("/users")) {
        try {
          if (req.method === "GET") {
            userController.getUsers(req, res);
          } else if(req.method === "POST"){
            userController.createUser(req, res);
          } else if(req.method === "PUT"){
            userController.updateUser(req, res)
          } else if(req.method === "DELETE"){
            console.log("in delte");
            userController.deleteUser(req, res)
          } else {
            res.writeHead(405);
            res.end(
              JSON.stringify({
                code: 405,
                remark: "Method not allowed",
              })
            );
          }
        } catch (e) {
          // returning error if something wents wrong on server
          console.log(e);
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              code: 500,
              remark: "Internal server error",
              data: null,
              error: e,
            })
          );
        }
      } else {
        // returning a not found error when client hits any url other than "/" and "/users"
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            code: 404,
            remark: "Not found",
            data: null,
          })
        );
      }



});

const PORT = 4002;

server.listen(PORT,()=>{
    console.log(`Your port running on", ${PORT}`)
})