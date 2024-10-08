// import json server
const jsonServer=require ('json-server')

// create server for MP(media player)
const MPServer=jsonServer.create()

// create middleware
const middleware=jsonServer.defaults()

// set route for json file
const route=jsonServer.router('db.json')

// to available app in port
const PORT=3000 || process.env.PORT
// USE middleware router
MPServer.use(middleware)
MPServer.use(route)

// run server in given port to resolve client request
MPServer.listen(PORT,()=>{
    console.log(`media player server started at port ${PORT} and waiting for client request`);
    
})