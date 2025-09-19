const mongoose = require('mongoose')

const PricingSchema = mongoose.Schema(
    {
        title: {
            type: String,
            maxLength: 12,
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },

    },
    {
        timeStamps: true
    }
)

const PricingModel = mongoose.model('pricing' , PricingSchema)

module.exports = PricingModel ;