import { Router } from "express";
import profileController from "../controllers/ProfileController";

const router = new Router();

router.get('/', profileController.getAll);
router.get('/:id', profileController.get);
router.post('/', profileController.create);
router.put('/:id', profileController.update);
router.delete('/:id', profileController.delete);

export default router;
