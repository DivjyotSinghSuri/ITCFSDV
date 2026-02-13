const http= require('http');

 const PORT = 4001;
const sum=require("./apiCall")
 const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);


        if(req.url == "/msg" && req.method == "GET"){
            res.setHeader("Content-Type", "text/html");
            res.end(JSON.stringify({msg:"Welcome inside /msg endpoint"}))
        }else if(req.url == '/data' && req.method == 'GET'){
        res.setHeader('Content-Type','application/json');
        // const data={
        //     name: "Divjyot",
        //     age: 29,
        //     email: "shuri@gmail.com"
        // }

        const data = await sum();
        res.end(JSON.stringify({msg:data}));
    }
 })

 server.listen(PORT, () => {
    console.log("Server is live on " + PORT);
 })