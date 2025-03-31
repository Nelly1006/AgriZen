rom fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
import joblib
import numpy as np

# Inicializar la aplicación FastAPI
app = FastAPI()

# Conectar con MongoDB (ajusta la URL según tu configuración)
client = MongoClient("mongodb://localhost:27017")
db = client["agrizen"]
collection = db["sensores"]

# Cargar el modelo de IA entrenado para detección de plagas
modelo_ia = joblib.load("modelo_plagas.pkl")

# Definir la estructura de los datos recibidos
class SensorData(BaseModel):
    temperatura: float
    humedad_aire: float
    humedad_suelo: float
    calidad_aire: float
    luz: float

@app.post("/procesar_datos/")
def procesar_datos(sensor_data: SensorData):
    """
    Recibe los datos de los sensores, los almacena en MongoDB y analiza si hay una plaga presente.
    """
    
    # Almacenar datos en MongoDB
    datos_sensores = sensor_data.dict()
    collection.insert_one(datos_sensores)
    
    # Convertir datos a formato compatible con el modelo de IA
    datos_array = np.array([[sensor_data.temperatura, 
                              sensor_data.humedad_aire, 
                              sensor_data.humedad_suelo, 
                              sensor_data.calidad_aire, 
                              sensor_data.luz]])
    
    # Predecir si hay una plaga
    resultado = modelo_ia.predict(datos_array)[0]
    
    # Mapear el resultado a una plaga específica
    plagas = {0: "Sin plagas detectadas", 1: "Pulgón", 2: "Gusano cogollero", 3: "Mosca blanca"}
    
    return {"resultado": plagas.get(resultado, "Desconocido")}

# Ejecutar con uvicorn si se desea lanzar el servidor manualmente
# uvicorn agrizen_backend:app --reload
