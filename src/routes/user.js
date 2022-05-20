import { Router } from "express";
import { authorize } from '../middlewares/Authorize';
import userController from "../controllers/UserController";

const router = new Router();

router.get('/', authorize, userController.getAll);
router.get('/:id', authorize, userController.get);
router.post('/', authorize, userController.create);
router.put('/:id', authorize, userController.update);
router.delete('/:id', authorize, userController.delete);

export default router;
