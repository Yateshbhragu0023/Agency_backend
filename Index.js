require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const PortfolioRouter = require('./Routers/PortfolioRouter');
const server = express();
const cors = require("cors");
const AdminRouter = require('./Routers/AdminRouter');

server.use(cors(
    {
        origin : 'https://agency-website-kappa-liard.vercel.app'
    }
))
server.use(express.json())
server.use(express.static('Public'))

server.use('/project' , PortfolioRouter)
server.use('/admin' , AdminRouter)

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

