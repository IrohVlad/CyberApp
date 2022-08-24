import { Router } from "express";
import categoryRouter from './categoryRouter.js';
import categoriesRouter from './categoriesRouter.js';

const router = Router();

router.use('/category', categoryRouter);
router.use('/categories', categoriesRouter);

export default router;