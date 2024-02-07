const fs = require ("fs");

// function to read JSON data from file 

function read(){
    try {
        const data = fs.readFileSync("./db.json","utf-8")
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (error) {
        throw new Error("error reading file", err);
    }

}



// function to write JSON data from file 

function write(){
    try {
        const jsonString = JSON.stringify(data);
        fs.writeFileSync("./db.json",jsonString, "utf-8");
        return;
    } catch (error) {
        throw new Error("error reading file ", err);
    }
}

module.exports ={
    read,
    write
}