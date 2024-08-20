import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {getCompany,registerCompany,getCompanyById,updateCompany} from "../controllers/company.controller.js"
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();


router.post("/register",isAuthenticated,registerCompany);
router.get("/get",isAuthenticated,getCompany)
router.get("/get/companyById/:id",isAuthenticated,getCompanyById);
router.put("/update/:id",isAuthenticated,singleUpload, updateCompany)
export default router;

