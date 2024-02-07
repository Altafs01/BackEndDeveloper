const helper = require ("..helper/");

const getUsers = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
  
    const storedData = helper.read();
    res.end(JSON.stringify(storedData));
    
  };


  module.exports = { getUsers};