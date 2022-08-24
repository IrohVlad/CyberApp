import { Router } from "express";
import categoryController from "../controllers/categoryController.js";

const router = Router();

router.get('/', categoryController.getOne);
// router.post('/', categoryController.createPic)

export default router;