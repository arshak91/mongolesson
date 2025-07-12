import fs from "fs";

export const createOrder = (req, res) => {
  console.log("user: ", req.user);
  const order = {
    ...req.body,
    user: req.user.email
  }
  const data = JSON.parse(fs.readFileSync("./db/orders.json"));
  data.push(order)
  fs.writeFileSync("./db/orders.json", JSON.stringify(data));
  res.json({
    status: 1,
    message: "order created",
    data: data
  })
}