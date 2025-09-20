const express = require('express');
const AdminController = require('../Controllers/AdminController');
const AdminRouter = express.Router()

AdminRouter.post(
    '/create',
    (req, res)=>{
       const result = new AdminController().CreateAdmin(req.body)
       result.then(
        (succes)=>{
            res.send(succes)
        }
       ).catch(
        (error)=>{
            res.send(error)
        }
       )
    }
)

module.exports = AdminRouter ;