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
  const orders = await Orders.find().populate("author");
  res.json(orders)
}