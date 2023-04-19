const EntryData=require('../models/entry.model');
const Customer=require('../models/customer.model');

exports.createEntry=async(req,res)=>{

        let customerId=req.params.customer;
            const entryObj={
                customer:customerId,
                youGave:req.body.youGave,
                youGot:req.body.youGot,
                paymentMethod:req.body.paymentMethod
            }
            

        try {
            let entry=await EntryData.create(entryObj);
            res.status(200).send({
                message:"Data Added success",
                status:true,
                data:entry
            })

        } catch (error) {
            res.status(500).send({
                message:"something went wrong",
                status:false,
                data:error.message
            })
        }

}

