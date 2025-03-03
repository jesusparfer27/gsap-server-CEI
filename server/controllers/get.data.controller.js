import express from 'express';
import mongoose from 'mongoose';
import { Furniture } from '../db/mongodb.js';

const router = express.Router();

export const getFurniture = async (req, res) => {
    try {
        const furnitures = await Furniture.find();
        res.status(200).json(furnitures);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los muebles', error });
    }
};


export default router;