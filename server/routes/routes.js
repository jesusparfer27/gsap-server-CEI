import { Router } from 'express';
import { connectDB } from '../db/mongodb.js';
import { getFurniture } from '../controllers/get.data.controller.js';
import { getFurnitureSlider } from '../controllers/get.data.controller.js';

connectDB()

const router = Router();

router.get("/furniture", getFurniture);
router.get("/furniture/slider", getFurnitureSlider);


export default router;
