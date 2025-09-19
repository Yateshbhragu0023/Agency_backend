const express = require('express')
const PortfolioController = require('../Controllers/PortfolioController')
const PortfolioRouter = express.Router()
const fileUpload = require('express-fileupload')

PortfolioRouter.post(
    "/add",
    fileUpload(
        {
            createParentPath: true
        }
    ),
    (req, res) => {
        const result = new PortfolioController().add(req.body, req.files?.ImageName)
        result.then(
            (succes) => {
                res.send(succes)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

PortfolioRouter.get(
    "/:id",
    (req, res) => {
        const result = new PortfolioController().read(req.params.id)
        result.then(
            (succes) => {
                res.send(succes)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)
PortfolioRouter.get(
    "/",
    (req, res) => {
        const result = new PortfolioController().read(req.params.id)
        result.then(
            (succes) => {
                res.send(succes)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

PortfolioRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new PortfolioController().delete(req.params.id)
        result.then(
            (succes) => {
                res.send(succes)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

module.exports = PortfolioRouter;