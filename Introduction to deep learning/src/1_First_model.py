import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

X = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], dtype=float)
y = np.array([1, 3, 5, 6, 48, 56, 98, 105, 849, 1000], dtype=float)

# Модель
model = tf.keras.Sequential([
    tf.keras.layers.Dense(units=1, input_shape=[1])  # units - колич нейронов в слое, input_shape - размерность входного параметра
    # Dense - содержит y = mx + b
])
model.compile(loss='mean_squared_error', optimizer=tf.keras.optimizers.Adam(0.1))
history = model.fit(X, y, epochs=500, verbose=False)   # verbose - уровень логирования
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.plot(history.history['loss'])
plt.show()
# Предсказание
predict = model.predict([11])
print(predict)
# Веса
print("Это значения переменных слоя: {}".format(model.get_weights()))

# Модель с несколькими слоями
model = tf.keras.Sequential([
    tf.keras.layers.Dense(units=4, input_shape=[1]),
    tf.keras.layers.Dense(units=4),
    tf.keras.layers.Dense(units=1)
])
model.compile(loss='mean_squared_error', optimizer=tf.keras.optimizers.Adam(0.1))
model.fit(X, y, epochs=500, verbose=False)
print(model.predict([11]))
print("Это значения переменных слоя: {}".format(model.get_weights()))