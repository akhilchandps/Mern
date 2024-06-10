const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')

const middileware = jsonServer.defaults()

const port = 3002
server.use(middileware)
server.use(router)

server.listen(port,()=>{
    console.log("listening on port " +port);
})
