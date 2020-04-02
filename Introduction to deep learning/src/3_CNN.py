"""Задача классификации изображений одежды Сверточная сеть CNN"""
"""Предыдущая нн - дает на обучении 89% точность, но на тесте (перевернутые изобр) - 20%"""
"""Тут добавили  модель сначала две свертки - точность 94%, но на перевернутых на тесте - опять 20%"""
"""Значит важен последний слои"""

import math
import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf
import tensorflow_datasets as tfds
# Улучшим отображение прогрессбара
import tqdm.auto

tqdm.tqdm = tqdm.auto.tqdm

# загрузим данные
dataset, metadata = tfds.load('fashion_mnist', as_supervised=True, with_info=True)
train_dataset = dataset['train']
test_dataset = dataset['test']

class_names = ['Футболка / топ', "Шорты", "Свитер", "Платье",
               "Плащ", "Сандали", "Рубашка", "Кроссовок", "Сумка",
               "Ботинок"]
num_train_examples = metadata.splits['train'].num_examples
num_test_examples = metadata.splits['test'].num_examples
print('Количество тренировочных экземпляров: {}'.format(num_train_examples))
print('Количество тестовых экземпляров: {}'.format(num_test_examples))


# значения пискселей из [0..255] -> [0..1] - нормализация
def normalize(images, labels):
    images = tf.cast(images, tf.float32)  # преобразуем значение пискселя в float32: 240 -> 240.0
    images /= 255
    return images, labels


def mirror(images, labels):
    return tf.image.flip_up_down(images), labels  # переворачивает изображение


train_dataset = train_dataset.map(normalize)
test_dataset = test_dataset.map(normalize).map(mirror)  # переворачиваем чтоб ухудшить точность на тестовоой выборке

# Строим МОДЕЛЬ НН
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), padding='same', activation=tf.nn.relu,  # 32 фильтра, ядро 3*3, padding - забить 0 пиксели по краям вне ядра
                           input_shape=(28, 28, 1)),
    tf.keras.layers.MaxPooling2D((2, 2), strides=2),  # ядро 2*2 с шагом strides. MaxPooling2D - берем макс значение среди пикселей в ядре
    tf.keras.layers.Conv2D(64, (3, 3), padding='same', activation=tf.nn.relu),
    tf.keras.layers.MaxPooling2D((2, 2), strides=2),
    tf.keras.layers.Flatten(input_shape=(28, 28, 1)),
    tf.keras.layers.Dense(128, activation=tf.nn.relu),
    tf.keras.layers.Dense(10, activation=tf.nn.softmax)
])
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
BATCH_SIZE = 32
train_dataset = train_dataset.repeat().shuffle(num_train_examples).batch(BATCH_SIZE)
test_dataset = test_dataset.batch(BATCH_SIZE)
model.fit(train_dataset, epochs=5, steps_per_epoch=math.ceil(num_train_examples / BATCH_SIZE))

# ПРоверим точность на тестовых данных
test_loss, test_accuracy = model.evaluate(test_dataset, steps=math.ceil(num_test_examples / BATCH_SIZE))
print("Точность на тестовом наборе данных: ", test_accuracy)