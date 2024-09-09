const mongoose = require('mongoose');

const customer=new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
})

const Customer=mongoose.model("Customer",customer);

module.exports=Customer;