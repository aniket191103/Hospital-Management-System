
import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middleware/Auth.js";
const router = express.Router();

router.post("/send",isPatientAuthenticated, sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);

export default router;
