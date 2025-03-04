require('dotenv').config();  // Cargar las variables de entorno
const express = require('express');
const connectDB = require('./config/db');  // Importar la función de conexión a la DB

const app = express();

// Conectar a la base de datos de MongoDB
connectDB();

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Configurar el puerto del servidor
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
