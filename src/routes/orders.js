import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createOrder, getMyOrder, getOrders,getOthersOrder } from "../controllers/order.js";

const routes = Router();


routes.post("/", authMiddleware, createOrder)
routes.post("/item", (req, res) => {
  res.json(req.body)
})

routes.get("/",authMiddleware, getOrders)

routes.get("/myorders",authMiddleware,getMyOrder)

routes.get("/oterorders",authMiddleware,getOthersOrder)


export default routes