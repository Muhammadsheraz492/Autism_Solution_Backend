const http=require("http")
const app=require('./App.js');
const port=process.env.port||3000;
const server=http.createServer(app)
server.listen(port,()=>console.log("Server connected to this "+port));
