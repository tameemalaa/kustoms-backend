const Customer = require('../models/customer');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./controllers/authMiddleware');

const  postCustomerSignUp = async(req ,res ) => {
    // TODO : Add RegX to validate CustomerData
    // TODO : Reduce the number of queries while keeping the source of repetition known 
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
        res.status(400).json({error : "username"})
    }
    if (Customer.findOne({where : {email : customerData.email}})){
        res.status(400).error({error : "email"})
    }
    if (Customer.findOne({where : {phone : customerData.phone}})){
        res.status(400).error({error : "phone"})
    }
    try{
        const salt = await bcrypt.genSalt();
        CustomerData.password = await bcrypt.hash(req.body.password, salt);
        Customer.create(CustomerDate).then(customer=>{res.status(201).redirect('/login')});
    } 
    catch{
        res.status(500).send();
    }
} 

const postCustomerSignIn = async(req , res) => {
    try{
            username= req.body.username
        }
        catch(err){
            res.status(400).error(err.message)
        }
    Customer.findOne({
        where: {
            [Op.or]: [
                { username: username },
                { email: username }
            ]}}).then( customer => {
        if(!customer){ return res.status(406).send('customer not found'); }
    try{
        if(bcrypt.compare(req.body.password, customer.password)){
            const accessToken = jwt.sign({id : customer.id , role : 'customer'}, process.env.ACCESS_SECRETE_TOKEN);
            res.status(200).json({"jwt": accessToken});
        }
        else res.send("wrong password");
        }
    catch {
        res.status(500).send();
        }
        });
}


module.exports={
    postCustomerSignUp,
    postCustomerSignIn
}