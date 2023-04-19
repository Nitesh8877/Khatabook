const Customer=require('../models/customer.model');
const mongoose=require('mongoose').SchemaTypes.ObjectId
const validateCustomerBodyReq=async(req,res,next)=>{

    /**
     * validate Customber details
     *  Steps
     * 1. Customer ObjectId
     * 2. Customer Name
     * 3. phone number
     */
    if(!req.body.khatabook){
      return res.status(400).send({
            mesaage:"Khatabook Id in not provided! "
        })
    }

    if(!mongoose.isValid(req.body.khatabook)){
        return res.status(400).send({
            message:"Khatabook Id provied is wrong please enter the valid Id !"
        })
    }

    if(!req.body.name){
        return res.status(400).send({
            message:"Name can't provided! "
        })
    }

    if(!req.body.phone){
        return res.status(400).send({
            message:"Phone number can't provied"
        })
    }
    next();

}

module.exports={
    validateCustomerBodyReq:validateCustomerBodyReq
}