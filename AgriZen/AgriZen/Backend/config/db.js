import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // 👈 Esto carga las variables del .env

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error al conectar MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
