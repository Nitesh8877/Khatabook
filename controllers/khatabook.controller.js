const Khatabook=require('../models/khatabook.model');
const User=require('../models/user.model');
exports.khatabookUser=async(req,res)=>{  
    let bodyReq={
        user:req.body.userId,
        title:req.body.title
    }
    try {

        let user=await User.findOne({
            _id:req.body.userId
        })
        if(!user){
            return res.status(403).send({
                message:"User Id does not exist!",
                status:false,
                data:null
            })
        }
        let khatabookUser=await Khatabook.findOne({
            user:req.body.userId
        })
        if(khatabookUser){
            return res.status(200).send({
                message:"User Alredy Added! ",
                data:khatabookUser
            })
        }
        let khatabook=await Khatabook.create(bodyReq);
        if(khatabook==null){
            res.status(400).send({
                message:"User not found!"
            })
        }
       
        res.status(200).send({
            message:"User added successfully",
            status:true,
            data:khatabook
        })
        
    } catch (error) {
        res.status(500).send({
            message:"something went wrong",
            status:false,
            data:error.message
        })
    }

}

exports.khatabookDestroy=async(req,res)=>{
    const userKhatabookId=req.body.khatabook;
    console.log(userKhatabookId)
    try {
        let khata=await Khatabook.findOne({
            _id:userKhatabookId
        })
        if(!khata){
            return res.status(200).send({
                message:"Khatabook Alredy deleted"
            })
        }

        let khatabook=await Khatabook.deleteOne({
            _id:userKhatabookId
        })
        

        res.status(200).send({
            message:"Khatbook user delete successfuly",
            status:true,
            data:khatabook
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            data:null
        })
    }
}