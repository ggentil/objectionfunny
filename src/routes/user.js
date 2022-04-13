import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

// router.get('/', profileController.getAll);
router.get('/:id', userController.get);
// router.post('/', profileController.create);
// router.put('/:id', profileController.update);
// router.delete('/:id', profileController.delete);

export default router;
