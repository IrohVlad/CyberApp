import { Router } from "express";
import categoryController from "../controllers/categoryController.js";

const router = Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getOne);

export default router;