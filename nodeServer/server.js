let http=require("http");
let fs = require('fs');
let url = require('url');
http.createServer(
    (req,res)=>{
        let urlobj = url.parse(req.url);
        if(urlobj.pathname=="/"){
            console.log(__dirname);
            fs.readFile(__dirname+"../pages/index.html",(err,data)=>{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            })
        }
    }
).listen(
    7000,(err)=>{
        if(err) throw err;
        console.log("runing in 7000");
    }
)