const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// Creating schema for the customer model, which will be used to store all of our customers'
const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    customerID: {
        type: Number,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('customer', customerSchema)
