import mongoose, { Schema } from "mongoose";

const usersSchema = Schema({
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  password: String,
  wallet: {
    type: Number
  }
})

export const Users = mongoose.model('users', usersSchema);