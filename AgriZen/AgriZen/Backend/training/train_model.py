import os
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from sklearn.model_selection import train_test_split
import numpy as np
from tensorflow.keras import layers, models

# Ruta donde tienes guardado el dataset
dataset_path = "backend/training/dataset"

# Definir tamaños de imagen e hiperparámetros
IMG_SIZE = (224, 224)
BATCH_SIZE = 32

# Generadores de datos para entrenamiento y validación
datagen = ImageDataGenerator(
    rescale=1./255,  # Normalización de píxeles
    validation_split=0.2  # Separar 20% para validación
)

train_generator = datagen.flow_from_directory(
    dataset_path,
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical',  # Para clasificación multiclase
    subset='training'
)

val_generator = datagen.flow_from_directory(
    dataset_path,
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical',  # Para clasificación multiclase
    subset='validation'
)

print("Clases detectadas:", train_generator.class_indices)

# Definir el modelo CNN
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(len(train_generator.class_indices), activation='softmax')  # Número de clases
])

# Resumen del modelo
model.summary()

# Compilar el modelo
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Entrenar el modelo
history = model.fit(
    train_generator,
    epochs=10,
    validation_data=val_generator
)

# Guardar el modelo entrenado
model.save('backend/training/model/maiz_plagas_model.h5')

# Evaluar el modelo con el conjunto de validación
val_loss, val_acc = model.evaluate(val_generator)
print(f'Precisión de validación: {val_acc * 100:.2f}%')
