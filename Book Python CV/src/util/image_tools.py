import os
import numpy as np
from PIL import Image


def get_imlist(path):
    """ Возвращает список имен всех jpg-файлов в каталоге. """
    return [os.path.join(path, file) for file in os.listdir(path) if file.endswith('jpg')]


def image_resize(image, size):
    """ Изменить размер массива с помощью PIL. """
    pil_image = Image.fromarray(np.uint8(image))
    return np.array(pil_image.resize(size))


def histeq(image, nbr_bins=256):
    """ Выравнивание гистограммы полутонового изображения.
        image - полутоновое изображение.
        :return - изображение для которого гистограмма выровнена с помощью функ распределения
     """
    # получаем гисторгамму изображения
    imhist, bins = np.histogram(image.flatten(), nbr_bins, normed=True)
    cdf = imhist.cumsum()  # функция распределения
    cdf = 255 * cdf / cdf[-1]  # нормируем
    # изспоьзуем линейную интерполяцию cdf для нахождения значений новых пикселей
    image2 = np.interp(image.flatten(), bins[:-1], cdf)
    return image2.reshape(image.shape), cdf


def compute_average(image_list):
    """ Вычислить среднее изображение из списка изображений. """
    # первое изображение в массив float
    average_image = np.array(Image.open(image_list[0], 'f'))
    for im_name in image_list[1:]:
        try:
            average_image += np.array(Image.open(im_name))
        except:
            print(im_name, " - изображение пропущено")
    average_image /= len(image_list)
    # возвращаем среднее в виде массива
    return np.array(average_image, 'uint8')


def pca(X):
    """ Метод главных компонент
        X: матрица, в которой обучающие данные хранятся в виде линеаризованныъ массивов, по одному в каждой строке
        :return: матрица проекции (наиболее важные измерения в начале), дисперсия, среднее. """
    num_data, dim = X.shape  # колич измерений
    # центрируем данные
    mean_X = X.mean(axis=0)
    X = X - mean_X
    if dim > num_data:
        # PCA с компактным трюком
        M = np.dot(X, X.T)  # ковариационная матрица
        e, EV = np.linalg.eigh(M)  # собственные значения и собственные векторы
        tmp = np.dot(X.T, EV).T  # компактный трюк
        V = tmp[::-1]  # меняем порядок, потому что нам нужны последние собств векторы
        S = np.sqrt(e)[::-1]  # меняем порядок, потому что собств значения перечислены в порядке возрастания
        for i in range(V.shape[1]):
            V[:,i] /= S
    else:
        # PCA с использованием сингулярного разложения
        U,S,V = np.linalg.svd(X)
        V = V[:num_data]  # имеет смысл возвращать только первые num_data строк
    # Возвращаем матрицу проекции, дисперсию и среднее
    return V, S, mean_X
