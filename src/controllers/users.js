import { Users } from "../models/users.js"

export const updateUser = async (req,res) => {
  const {wallet} = req.body
  const user = req.user
  const candidate = await Users.findOneAndUpdate({_id: user.id}, {wallet, name: "John"}, {
    new: true
  })
  res.json(candidate);
}