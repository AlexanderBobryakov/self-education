import pickle  # Сериализует любой python объект в строку
import numpy as np
from PIL import Image

# Сериализуем изображение
with open('picleExample.pkl', 'wb') as f:
    pickle.dump(np.array(Image.open('1.jpg')), f)
    pickle.dump(np.array(Image.open('3.jpg')), f)
    # f.close()

# Десериализуем
with open('picleExample.pkl', 'rb') as f:
    image1 = pickle.load(f)
    image2 = pickle.load(f)
    # f.close()

Image.fromarray(image1).show()
Image.fromarray(image2).show()



