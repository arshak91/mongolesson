import { Orders } from "../models/orders.js";


export const getOrderById = async (id) => {
  return await Orders.findById(id)
}

export const getOrderByFilter = async (filter) => {
  return await Orders.find(filter)
}

export const findAndUpdate = async (filter, body) => {
  return await Orders.findOneAndUpdate(filter, body)
}