import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";
 
const router = express.Router();

router.post("/register",singleUpload,register);
router.post("/login",login);
router.get("/logout",logout);
router.post("/profile",isAuthenticated,singleUpload,updateProfile);

export default router;
