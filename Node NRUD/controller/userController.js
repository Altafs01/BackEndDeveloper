const helper = require("../helper")

const getUsers = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const storeData = helper.read();
    res.end(JSON.stringify(storeData));
};

const createUser = (req, res) => {
    try {
        let body = ""

        req.on("data", (chunk) => {
            body += chunk;
        });


        req.on("end", () => {

            if (body) {
                const parseData = JSON.parse(body);

                if (parseData.name && parseData.email) {
                    const storeData = helper.read();
                    helper.write([
                        ...storeData,
                        {
                            id: storeData.length + 1, ...parseData
                        }

                    ]);
                    res.end(
                        JSON.stringify({
                            code: 200,
                            remark: "user created"
                        })
                    );
                } else {
                    // res.end(400, {"Content-Type" : "application/json"})
                    res.end(
                        JSON.stringify({
                            code: 404,
                            remark: "please enter valid email and name"
                        })
                    )
                }

            }
            else {
                res.writeHead(400);
                res.end(
                    JSON.stringify({
                        code: 400,
                        remark: "please pass data"
                    })
                )
            }
        });
    } catch (error) {
        res.writeHead(500);
        res.end(
            JSON.stringify({
                code: 500,
                remark: "Something went wrong",
            })
        );
    }
}


const upadateUser = (req, res) => {
    try {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            if (body) {
                const parseData = JSON.parse(body);

                if ((parseData.name || parseData.email) && parseData.id) {
                    const storeData = helper.read();

                    const upadateData = storeData.map((item) => {
                        if (item.id === parseData.id) {
                            item.name = parseData.name || item.name;
                            item.email = parseData.email || item.email;
                        }
                        return item;
                    });

                    helper.write(upadateData);

                    res.end(
                        JSON.stringify({
                            code: 200,
                            remark: "user created"
                        })
                    );
                } else {
                    res.end(
                        JSON.stringify({
                            code: 404,
                            remark: "please enter valid data"
                        })
                    );
                }
            } else {
                res.writeHead(400);
                res.end(
                    JSON.stringify({
                        code: 400,
                        remark: "Data is not valid",
                    })
                );
            }
        });

    } catch (error) {
        res.writeHead(500);
        res.end(
            JSON.stringify({
                code: 500,
                remark: "Something went wrong",
            })
        );

    }
}

module.exports = { getUsers, createUser, upadateUser }