import express from "express";
import connectDB from "./src/db/dbConnect.js";
import { Users } from "./src/models/users.js";
import { Orders } from "./src/models/orders.js";

const app = express()
connectDB()
app.use(express.json())

app.get("/", async (req, res) => {
  const users = await Users.find({})
  res.json(users)
})

app.post("/", async (req, res) => {
  const users = await Users.create(req.body)
  res.json(users)
})

app.delete("/:id", async (req, res) => {
  const result = await Users.deleteOne({
    _id: req.params.id
  })
  res.json(result)
})

app.listen("4000", () => {
  console.log("server runc on 4000 port");
})