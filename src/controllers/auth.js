import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Users } from "../models/users.js"

export const login = async (req, res) => {
  const {email, password} = req.body
  const secret = process.env.JWT_SECRET || "hello";
  console.log("user: ", req.user);

  const pass = bcrypt.compareSync(password, req.user.password);

  console.log('pass: ', pass);
  if (!pass) {
    return res.status(401).json({
      message: "Sxal password!"
    })
  }
  const token = jwt.sign({
    email,
    id: req.user._id
  }, secret, {
    expiresIn: "2h"
  })
  res.json({
    token
  })
}

export const register = async (req, res) => {
  // const {name, surname, email, age, password} = req.body
  const salt = bcrypt.genSaltSync(+process.env.ROUND ?? 10);
  console.log(salt);

  const pass = bcrypt.hashSync(req.body.password, salt);
  console.log(pass);

  const data = {...req.body, password: pass};
  console.log(data);

  const user = await Users.create(data)
  res.json({
    data: user
  })
}

