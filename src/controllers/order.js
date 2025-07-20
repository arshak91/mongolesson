import fs from "fs";
import { Orders } from "../models/orders.js";

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
  const orders = await Orders.find({}).populate("author");
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