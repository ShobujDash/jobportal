import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompnay } from "../controllers/company.controller.js";

const router = express.Router();

router.post("/register",isAuthenticated, registerCompany);
router.post("/get",isAuthenticated, getCompany);
router.post("/get/:id",isAuthenticated, getCompanyById);
router.post("/update/:id", isAuthenticated, updateCompnay);

export default router;
