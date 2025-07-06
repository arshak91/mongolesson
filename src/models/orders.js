import mongoose, { Schema } from "mongoose";

const ordersSchema = Schema({
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    require: false
  },
  email: String,
  age: Number,
  password: String
})

export const Orders = mongoose.model('orders', ordersSchema);