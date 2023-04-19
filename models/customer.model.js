const mongoose = require("mongoose");
const { Schema } = mongoose;
const { String, ObjectId } = Schema.Types;

const customerSchema = new Schema(
  {
    khatabook: {
      type: ObjectId,
      ref: "Khatabook",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports=mongoose.model("Customer", customerSchema);
