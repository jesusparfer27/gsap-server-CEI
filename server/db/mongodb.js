import mongoose from 'mongoose';
import { mongodbUri } from '../config/mongo.config.js';

const connectDB = async () => { 
    try {
        await mongoose.connect(mongodbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB conectado correctamente");
    } catch (error) {
        console.error("Error conectando a MongoDB: ", error);
        process.exit(1);
    }
};

// Definir el esquema de Mongoose
const furnitureSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    diseñador: String,
    imagen: String
});

const furnitureSliderSchema = new mongoose.Schema({
    imagen: String
});

const Furniture = mongoose.model('Furniture', furnitureSchema, 'furnitures-main');
const FurnitureSlider = mongoose.model('FurnitureSlider', furnitureSliderSchema, 'furnitures-slider');



export { Furniture, FurnitureSlider, connectDB };