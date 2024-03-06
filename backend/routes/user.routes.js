import express from "express";
import {getUsersForSidebar} from "../Controllers/user.controller.js"
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();
router.get("/",protectRoute,getUsersForSidebar);

export default router;