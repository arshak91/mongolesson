import express from "express";
import connectDB from "./src/db/dbConnect.js";
import authRoutes from "./src/routes/auth.js"
import orderRoutes from "./src/routes/orders.js"
const app = express()
connectDB()
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/order", orderRoutes)


app.listen("4000", () => {
  console.log("server runc on 4000 port");
})