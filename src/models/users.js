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
  email: String,
  age: Number,
  password: String
})

export const Users = mongoose.model('users', usersSchema);