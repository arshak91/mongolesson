import { Router } from "express";
import { createInVoice, getInVoices } from "../controllers/inVoice.js";

const inVoiceRouter = Router();

inVoiceRouter.post('/', createInVoice);

inVoiceRouter.get("/",getInVoices)

export default inVoiceRouter;