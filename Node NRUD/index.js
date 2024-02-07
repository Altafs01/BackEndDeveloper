const http = require("http");


// importing controller 
const homeController = require("./controller/homeController");
const userController = require("./controller/userController")
// const userController = require ("./controller/userController")

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
  res.setHeader("Access-Control-Allow-Origin", "GET,POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Origin", "Content-type");

  if(req.url === "/"){
    homeController.home(req,res);
  }else if(req.url.includes("/users")){
    // res.end('<h1 style="color:blue;">Hello World</h1>')
    try {
      if (req.method ==="GET"){
        userController.getUsers(req,res);

      }else if(req.method ==="POST"){
        userController.createUser(req,res);
      }else if(req.method === "PUT"){
        userController.upadateUser(req,res);
      }
    } catch (error) {
      console.log(error);
      res.writeHead(500,{"Content-Type": "application/json"});
      res.end(
        JSON.stringify({
          code:500,
          remark : "Interval Server error",
          data : null,
          error: error,
        })
      )
    }
  }
  else{
    res.writeHead(404, {"Content-type": "application/json"});
    res.writeHead(400, {"Content-Type" : "application/json"});
    res.end(
      JSON.stringify({
        code: 404,
        remark : "Not found",
        data : null,
      })
    )
  }
});


  const port = 5000;
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:5000`);
  });


