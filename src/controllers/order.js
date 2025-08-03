import fs from "fs";
import { findAndUpdate, getOrderByFilter } from "../service/order.js";

export const createOrder = async (req, res) => {
  console.log("user: ", req.user);
  const data = {
    ...req.body,
    author: req.user.id
  }
  const order = await Orders.create(data);

  res.json({
    status: 1,
    message: "order created",
    data: order
  })
}

export const getOrders = async (req, res) => {
  const orders = await getOrderByFilter(req.query);
  res.json(orders)
}

export const getMyOrder = async (req,res) => {
  const userId = req.user._id
  const orders = await Orders.find({
    author: userId
  })
  res.json(orders)
}

export const getOthersOrder = async (req,res) => {
  const userId = req.user._id
  const orders = await Orders.find({
    author: {$ne: userId}
  })
  res.json(orders)
}

export const changeMyOrder = async (req,res) => {
   const orderid = req.params.id
     const userId = req.user._id

   const body = req.body
   const updateOrders = await findAndUpdate({
    _id: orderid,
    author: userId
   }, {
    ...body
   }, {new:true})
   res.json(updateOrders)

}