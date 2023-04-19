const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Number, String, Array, ObjectId } = Schema.Types;
const {constant}=require('../utils/constant')
const entrySchema = new Schema(
  {
    customer: {
      type: ObjectId,
      ref: "Customer",
      required: true,
    },
    youGave: {
      type: Number,
      default: 0,
    },
    youGot: {
      type: Number,
      default: 0,
    },
    paymentMethod: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Entry = mongoose.model("Entry", entrySchema);


module.exports =Entry;

