const Customer=require('../models/customer.model');

exports.createCustomer=async(req,res)=>{
    
    let bodyReq={
        khatabook:req.body.khatabook,
        name:req.body.name,
        phone:req.body.phone
    }
    try {
        let customer=await Customer.create(bodyReq);
        res.status(200).send({
            message:"User created successfully",
            status:true,
            data:customer
        })
        
    } catch (error) {
        res.status(500).send({
            message:"something went wrong ",
            status:false,
            data:null
        })
    }
}

exports.showCustomer=async(req,res)=>{
    let userId=req.params.khatabook;
    try {
        let khatabook=await Customer.find({
            user:userId
        })
        if(khatabook==null){
            return res.status(400).send({
                message:"khatabook inside any customer not added! "
            })
        }
        res.status(200).send({
            message:"khatabook all user fetched!",
            status:true,
            data:khatabook
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went worng",
            status:false,
            data:null
        })
    }
}

exports.destroyCustomer=async(req,res)=>{

    let deleteObj={
        _id:req.body.customerId,
    }
    try {
        let khatabook=await Customer.findOneAndDelete(deleteObj)

        res.status(200).send({
            message:"Customer deleted !",
            status:true,
            data:khatabook
        })
    } catch (error) {
        res.status(200).send({
            message:"Something went wrong",
            status:false,
            data:null
        })
    }
}

exports.updateCustomer=async(req,res)=>{
    let customerId=req.params.customer;
    
    let customer=await Customer.findOne({_id:customerId});
    customer.name=req.body.name!=undefined?req.body.name:customer.name;
    customer.phone=req.body.phone!=undefined?req.body.phone:customer.phone;
    try {
        let updateCutomer=await customer.save();
        res.status(200).send({
            message:"Customer details update succefully",
            stauts:true,
            data:updateCutomer
        })
    } catch (error) {
        res.status(500).send({
            message:"something went wrong",
            status:false,
            data:null
        })
    }

}