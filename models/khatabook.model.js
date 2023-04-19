const mongoose = require("mongoose");


const khatabookSchema = new mongoose.Schema(
  {
    user: {
      type:mongoose.SchemaTypes.ObjectId ,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Khatabook=mongoose.model('Khatabook', khatabookSchema);
module.exports=Khatabook;