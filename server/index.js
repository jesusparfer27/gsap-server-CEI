import express from 'express'; // Framework para crear el servidor.
import cors from 'cors'; // Permite solicitudes de otros dominios.
import { PORT, FULL_DOMAIN_1 } from './config/mongo.config.js'; // Importa el puerto y el dominio desde el archivo de configuración.';
import mongoRoutes from './routes/routes.js'; // Rutas de la API para MongoDB.
import { connectDB } from './db/mongodb.js'; 
import path from 'path'; // Módulo para trabajar con rutas de archivos y directorios.
import fs from 'fs'; // Acceso al sistema de archivos.


const app = express();

// Configura middlewares para CORS, JSON y datos codificados en URL.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(process.cwd(), 'public'))); 

// Ruta principal de bienvenida.
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <h1>Bienvenidos a nuestra REST-API</h1>
    <p>Servidor iniciado en ${FULL_DOMAIN_1}</p>
  `);
});

// Agrega las rutas de la API en el prefijo '/API/v1'.
app.use('/API/v1', mongoRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ No se pudo conectar a la base de datos:", err);
    process.exit(1); // Cierra la app si falla la conexión
  });

export default app;