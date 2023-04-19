const Entry=require('../models/entry.model');
const mongoose=require('mongoose');
const validateEntryRequestBody=async(req,res,next)=>{

    /**
     * validate the entery model
     * Steps
     * 1. customerId
     * 2. youGave,
     * 3. youGot,
     * 4. paymentMethod,
     */

    if(!res.body.customer){
        return res.status(400).send({
            message:"Cusotmer Id in not provided! "
        })
    }

    if(!mongoose.isValid(req.body.customer)){
        return res.status(400).send({
            message:"Custome Id provied Invalid! "
        })
    }

    if(!req.body.youGave){
        return res.status(400).send({
            message:"please enter the Giving amount"
        })
    }

    if(!req.body.youGot){
        return res.status(400).send({
            message:"please enter the Got amount"
        })
    }
}

module.exports={
    validateEntryRequestBody:validateEntryRequestBody
}