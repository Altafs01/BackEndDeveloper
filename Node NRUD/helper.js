const fs = require("fs")

// function to read  JSON data from file. 

function read() {
    try {
        const data = fs.readFileSync("./db.json", "utf-8");
        const parseData = JSON.parse(data);
        return parseData;
    } catch (err) {
        throw new Error("Error reading file", err);
    }
}

// function to write json data from file 

function write(data) {
    try {
        const jsonString = JSON.stringify(data);
        fs.writeFileSync("./db.json", jsonString, 'utf-8')
        return;
    } catch (err) {
        throw new Error("Error reading file", err);
    }
}

module.exports = {
    read,
    write
}