import numpy as np
from pylab import *
from PIL import Image
from util import image_tools
from util.image_tools import pca

# Представление изображения в виде массива
image = np.array(Image.open('1.jpg'))
print(image.shape, image.dtype)  # (468, 900, 3) uint8 - колич (строк, столбцов, цветных каналов)
image = np.array(Image.open('1.jpg').convert('L'), 'f')  # f - использовать тип с плав точкой
print(image.shape, image.dtype)  # (468, 900) float32 - тут один канал

#  Преобразование уровня яркости
image2 = 255 - image  # инвертируем изображение
image3 = (100.0/255) * image + 100  # привести к интервалу 100...200
image4 = 255.0 * (image/255.0)**2  # применить квадратичную функцию (уменьшает зн-ния темных пикселей)
Image.fromarray(image3.astype(np.uint8)).save('3.jpg')
Image.fromarray(image4.astype(np.uint8)).save('4.jpg')

# Выравнивание гистограммы яркости (нормирование яркости)
image5, cdf = image_tools.histeq(image)
Image.fromarray(image).show()
Image.fromarray(image5).show()
plot(cdf)  # cumulative distribution function - функция распределения значений пикселей в изображении

# Метод главных компонент PCA
m, n = image3.shape[0:2]  # размер изображения
imlist = np.array(["3.jpg", "4.jpg"])
imnbr = len(imlist)  # число изображений всего
image_matrix = np.array([np.array(Image.open(i)).flatten() for i in imlist], 'f')
V, S, image_mean = pca(image_matrix)  # метод PCA
# покажем изображения
figure()
gray()
subplot(2, 2, 1)
imshow(image_mean.reshape(m, n))
for i in range(1):
    subplot(2, 2, i+2)
    imshow(V[i].reshape(m, n))
show()





