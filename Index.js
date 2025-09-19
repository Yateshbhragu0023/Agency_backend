require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const PortfolioRouter = require('./Routers/PortfolioRouter');
const server = express();
const cors = require("cors");


server.use(express.json())
server.use(express.static('Public'))
server.use(cors(
    {
        origin : ['http://localhost:5173']
    }
))
server.use('/project' , PortfolioRouter)

mongoose.connect(
    process.env.MONGODB_KEY,
    {
        dbName: "marketing_Agency"
    }
).then(
    (succes) => {
        server.listen(
            5001,
            () => {
                console.log("server started at 5001 port")
            }
        )
        console.log("mongo DB connected succesfully")
    }
).catch(
    () => {
        console.log("mongo DB not connected")
    }
)

