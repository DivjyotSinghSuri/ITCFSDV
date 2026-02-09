const http= require('http');

 const PORT = 4001;
const sum=require("./apiCall")
 const server = http.createServer((req, res) => {
        if(req.url == "/msg" && req.method == "GET"){
            res.setHeader("Content-Type", "text/html");
            res.end(JSON.stringify({msg:"Welcome inside /msg endpoint"}))
        }else if(req.url == '/data' && req.method == 'GET'){
        res.setHeader('Content-Type','application/json');
        // const data={
        //     name: "Divjyot",
        //     age: 29,
        //     email: "shuri@gmai.com"
        // }

        const data = sum(30,40);
        res.end(JSON.stringify({msg:data}));
    }
 })

 server.listen(PORT, () => {
    console.log("Server is live on " + PORT);
 })