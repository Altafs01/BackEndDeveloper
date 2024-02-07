const home = (req,res)=>{
    res.end(
        JSON.stringify({
            code : 200,
            Remark : "seccess"
        })
    );
};

module.export = {home}