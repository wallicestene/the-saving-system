// customer_index, customer_details, customer_create_get, customer_create_post, customer_delete
// customer_index
const customer_index = (req,res) =>{
    res.json({message: "hello there"})
}
// customer_details
const customer_details = (req,res) =>{
    res.json({message: "this is the customer"})
}
// customer_create_get
const customer_create_post = (req,res) =>{
    res.json({message: "added a customer"})
}
// customer_delete
const customer_delete = (req,res) =>{
    res.json({message: "Deleted a customer"})
}
module.exports = {
    customer_index,
    customer_details,
    customer_create_post,
    customer_delete
}