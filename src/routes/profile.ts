import { Router } from "express";
import { authorize } from '../middlewares/Authorize';
import profileController from "../controllers/ProfileController";

const router = new Router();

router.get('/', authorize, profileController.getAll);
router.get('/:id', authorize, profileController.get);
router.post('/', authorize, profileController.create);
router.put('/:id', authorize, profileController.update);
router.delete('/:id', authorize, profileController.delete);

export default router;
