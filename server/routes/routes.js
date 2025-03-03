import { Router } from 'express';
import { connectDB } from '../db/mongodb.js';
import { getFurniture } from '../controllers/get.data.controller.js';

connectDB()

const router = Router();

router.get("/furniture", getFurniture);

export default router;
