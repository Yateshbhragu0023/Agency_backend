const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: true
        },

    },
    {
        timeStamps: true
    }
)

const AdminModel = mongoose.model('admin' , AdminSchema)

module.exports = AdminModel ;