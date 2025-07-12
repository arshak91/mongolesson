import jwt from "jsonwebtoken"
import fs from "fs"
import { Users } from "../models/users.js"

export const loginMiddle = async (req, res, next) => {
  const {email, password} = req.body
  if (!email) {
    return res.status(401).json({
      message: "email@ chka!"
    })
  }
  const user = await Users.findOne({
    email: email
  });
  req.user = user;
  user ? next() : res.status(401).json({
    message: "User@ goyutyun chuni!"
  })
}

export const authMiddleware = async (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  let validToken = false;
  let errorMessage = "";
  let email = ""
  let id = ""
  jwt.verify(req.headers.token, secret, (err, decoded) => {
    if (err) {
      console.log(err);
      errorMessage = err.message
    } else {
      validToken = true
    }
    console.log(decoded);
    
    email = decoded.email
    id = decoded.id
  });
  req.user = {
    id,
    email
  }
  if (validToken) {
    next()
  } else {
    return res.status(401).json({
      message: errorMessage
    })
  }
}

export const checkFile = async (req, res, next) => {
  if (req.file || req.files) {
    next()
  } else {
    return res.status(400).json({
      message: "file@ partadir e!"
    })
  }
  
}
