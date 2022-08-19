import { Router } from "express";
import categoryRouter from './categoryRouter.js';

const router = Router();

router.use('/category', categoryRouter)

export default router;