import express from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

router.get("/", memberController.goHome);

router.get("/Login", memberController.getLogin);

router.get("/Signup", memberController.getSignUp);




export default router;