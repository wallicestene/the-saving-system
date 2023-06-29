const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customerController")

// get all customers
router.get("/api/customers", customerController.customer_index)
// add new customet to the list of customers
router.post("/api/customers", customerController.customer_create_post)
// get single customer
router.get('/api/customers/:id',customerController.customer_details)
// delete a customer form list of customers
router.delete('/api/customers/:id', customerController.customer_delete)
// update a customer details
router.patch('/api/customers/:id', customerController.updateCustomerDetails);
//  getting the total amount from all customers
router.get('/api/totalAmount', customerController.getTotalSavings);
module.exports = router
