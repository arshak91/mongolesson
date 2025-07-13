import express from "express";
import connectDB from "./src/db/dbConnect.js";
import authRoutes from "./src/routes/auth.js"
import orderRoutes from "./src/routes/orders.js"
import userRouter from './src/routes/users.js'
import invoiceRouter from './src/routes/invoice.js';


import "dotenv/config"
import { authMiddleware } from "./src/middlewares/authMiddleware.js";
const app = express()
connectDB()
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/order", orderRoutes)
app.use('/user',authMiddleware, userRouter);
app.use("/invoice", authMiddleware, invoiceRouter)


app.listen("4000", () => {
  console.log("server runc on 4000 port");
})