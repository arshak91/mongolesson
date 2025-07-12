import { Router } from "express";
import { login, register } from "../controllers/auth.js";
import { loginMiddle } from "../middlewares/authMiddleware.js"
const routes = Router()

routes.post("/registration", register)

routes.post("/login", loginMiddle, login)
export default routes