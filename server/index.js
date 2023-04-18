const express = require('express')
var cors=require('cors');// installed this because you can't call your api's from you web server

const app = express()
const port = 8000

// The app.use() function is used to register middleware functions in an Express.js application. When a request is received by the server, it passes through a series of middleware functions that are registered using app.use(). Each middleware function can modify the request or response objects or pass control to the next middleware function in the chain.
app.use(cors());
app.use(express.json()); 

// Available Routes
app.use('/api/auth',require('./routes/auth'));

app.listen(port, () => {
  console.log(`Courseaion Server is listening on port ${port}`)
})