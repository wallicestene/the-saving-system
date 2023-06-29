// get all customers, get Single Customer, customer_create_get, customer_create_post, customer_delete
const Customer = require("../models/customersModel")
// get all customers
const customer_index = (req,res) =>{
    Customer.find().sort({createdAt: -1})
    .then((result)=>{
        res.json(result)
    })
}
// get Single Customer
const customer_details = (req,res)  =>{
   const { id } = req.params
   Customer.findById(id)
   .then((result)=>{ 
    if(!result){
        return res.json({error: "No such customer"})
    }
    else{
       res.json(result)
    }
   })
}
// customer_create_get
const customer_create_post = (req,res) =>{
    const {name, amount, customerID} =  req.body
    Customer.create({ name, amount, customerID })
    .then(customer => {
        res.json(customer);
    })
    .catch(error => {
        console.log("Error in creating new customers:", error);
        res.status(500).json({ error: "Error in creating new customers" });
    });
}
// customer_delete
const customer_delete = (req, res) => {
    const { id } = req.params;
    
    Customer.findByIdAndDelete(id)
        .then((result) => { 
            if (!result) {
                return res.status(400).json({ error: "No such customer" });
            } else {
                res.json(result);
            }
        })
        .catch((error) => {
            console.log("Error in deleting customer:", error);
            res.status(500).json({ error: "Error in deleting customer" });
        });
};
// updating the amount
const updateCustomerDetails = (req, res) => {
    const { id } = req.params;
    
    Customer.findOneAndUpdate({ _id: id }, { ...req.body })
        .then((result) => { 
            if (!result) {
                return res.status(400).json({ error: "No such customer" });
            } else {
                res.json(result);
            }
        })
        .catch((error) => {
            console.log("Error in updating customer details:", error);
            res.status(500).json({ error: "Error in updating customer details" });
        });
};

//  getting the total amount of saving acrosss all customers
const getTotalSavings = (req,res) =>{
    Customer.aggregate([
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$amount" }
          }
        }
      ])
        .then((result) => {
          if (result.length > 0) {
            const totalAmount = result[0].totalAmount;
            res.json(totalAmount.toLocaleString()); // Return the total amount as a JSON response
          } else {
            res.json(0); // Return 0 if no customers found
          }
        })
        .catch((error) => {
          console.error("Error retrieving total amount: ", error);
          res.status(500).json({ error: "An error occurred" }); // Return an error response
        });
}


module.exports = {
    customer_index,
    customer_details,
    customer_create_post,
    customer_delete,
    updateCustomerDetails,
    getTotalSavings
}