// get all customers, get Single Customer, customer_create_get, customer_create_post, customer_delete
const Customer = require("../models/customersModel")
// get all customers
const customer_index = (req,res, next) =>{
    Customer.find().sort({createdAt : -1})
    .then((result)=>{
        res.json(result)
    })
    next()
}
// get Single Customer
const customer_details = (req,res,)  =>{
   const { id } = req.params
   Customer.findById(id)
   .then((result)=>{ 
    if(!result){
        return res.status(400).json({error: "No such customer"})
    }
    else{
       res.status(200).json(result)
    }
   })
}
// customer_create_get
const customer_create_post = async (req,res) =>{
    const {name, amount, customerID} =  req.body
    Customer.create({ name, amount, customerID })
    .then(customer => {
        res.status(200).json(customer);
    })
    .catch(error => {
        console.log("Error in creating new customers:", error);
        res.status(500).json({ error: "Error in creating new customers" });
    });
}
// customer_delete
const customer_delete = (req,res) =>{
    const {id} = req.params
    
    Customer.findByIdAndDelete({_id: id})
        .then((result)=>{ 
            if(!result){
                return res.status(400).json({error: "No such customer"})
            }
            else{
               res.status(200).json(result)
            }
           })
}
module.exports = {
    customer_index,
    customer_details,
    customer_create_post,
    customer_delete
}