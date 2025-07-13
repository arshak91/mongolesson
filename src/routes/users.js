import { Router } from "express";
import { updateUser } from "../controllers/users.js";

const router = Router()

router.put('/', updateUser)

export default router