import { Router } from "express";
import { getUserByEmail, loginUser, registerUser } from "./user.controller";

const router = Router();

router.get("/:email", getUserByEmail);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
