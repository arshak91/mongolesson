import mongoose, { Schema } from "mongoose";

const ordersSchema = Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  description:{
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
})

export const Orders = mongoose.model('orders', ordersSchema);