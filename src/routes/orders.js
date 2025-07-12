import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createOrder, getOrders } from "../controllers/order.js";

const routes = Router();


routes.post("/", authMiddleware, createOrder)

routes.post("/item", (req, res) => {
  res.json(req.body)
})

routes.get("/", getOrders)

export default routes