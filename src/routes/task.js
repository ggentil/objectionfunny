import { Router } from "express";
import taskController from "../controllers/TaskController";

const router = new Router();

router.get('/', taskController.test);

export default router;
