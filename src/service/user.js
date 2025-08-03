import { Users } from "../models/users.js";


export const getUserById = async (id) => {
  return await Users.findById(id)
}

export const getUserByFilter = async (filter) => {
  return await Users.find(filter)
}

export const findUserAndUpdate = async (filter, data) => {
  return await Users.findOneAndUpdate(filter, data, {new: true})
}