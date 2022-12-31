const Customer = require('../models/customer');
const { Op } = require("sequelize");

const postCustomerSignUp = (req ,res ) => {
    // TODO : add RegX to validate CustomerData
    try{
    customerData = {
        username : req.body.username,
        email : req.body.email,
        password: req.body.password,
        phone : req.body.phone,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate
    }}
    catch(err){
        res.status(400).error(err.message)
    }
    if (Customer.findOne({where : {username : customerData.username}})){
        res.status(400).error(err.message)
    }
    if (Customer.findOne({where : {email : customerData.email}})){
        res.status(400).error(err.message)
    }
    if (Customer.findOne({where : {phone : customerData.phone}})){
        res.status(400).error(err.message)
    }
} 

const postCustomerSignIn = (req , res) => {
    data = req.body
    Customer.findOne({where : {username : req.body.username}})
    .then(user => if user.password == data.password  {
            return res.status(202).json(token : JWT TOKEN )
        }
        else {
            return res.status(401) .json(token : 0 );   
        }
    )
}

const getItem = (req , res) => {
    customers = Customer.findall();
    return res.status(200).json(customers)
}

module.exports={
    postCustomerSignUp,
    postCustomerSignIn
}