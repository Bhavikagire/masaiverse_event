let jsonServer = require("json-server")
let server = jsonServer.create();
let router = jsonServer.router("db.json")
let middlewares = jsonServer.defaults()

const port = 3000

server.use(middlewares);
server.use(jsonServer.bodyParser)

server.post("/users",(req,res)=>{
    let {name,age,place,batch_name,profession} = req.body;
    let newUser = {
        id: Date.now(),
        name,
        age,
        place,
        batch_name,
        profession

    }

    router.db.get("users").push(newUser).write()
    res.status(201).json(newUser)
})

server.use(router)
server.listen(port,()=>{
    console.log("json server running at 3000")
})
