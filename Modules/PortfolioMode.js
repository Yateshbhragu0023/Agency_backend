const mongoose = require('mongoose')

const PortfolioSchema = mongoose.Schema(
    {
        title: {
            type: String,
            maxLength: 30,
            required: true
        },
        ProjectLink: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        ImageName: {
            type: String,
            required: true
        },

    },
    {
        timeStamps: true
    }
)

const PortfolioModel = mongoose.model('portfolio' , PortfolioSchema)

module.exports = PortfolioModel ;