require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require ("path")

const app = express();

//creating the middleware
app.use(express.json())
app.use(cors())



//creating the port
const port = process.env.PORT || 5000;
app.listen(port, console.log('server listing to port 5000'));