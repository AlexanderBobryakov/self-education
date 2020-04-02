from PIL import Image

pil_image = Image.open("1.jpg")

pil_image = pil_image.convert('L')  # преобразование цветов
pil_image.save('2.bmp')  # сохраняет в нужный формат

# Создание миниатюр
pil_image.thumbnail((1024, 768))

# Копирование и вставка областей
box = (100, 100, 400, 400)  # координаты сторон (левая, верхняя правая, нижняя)
region = pil_image.crop(box)  # вырезаем кусок
region = region.transpose(Image.ROTATE_90)  # повернем кусок
pil_image.paste(region, (100, 100, 400, 400))  # вставляем кусок в координаты

# Изменение размера и поворот
out = pil_image.resize((500, 600))  # задачем размер
out = out.rotate(30)  # поворот на угол против чс

out.show()



