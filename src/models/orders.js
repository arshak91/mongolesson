import mongoose, { Schema } from "mongoose";

const ordersSchema = Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    default: 0
  },
  description:{
    type: String,
    require: true
  }
})

export const Orders = mongoose.model('orders', ordersSchema);