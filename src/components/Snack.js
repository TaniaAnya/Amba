import React from 'react';
import milow from './asset/milow.png'
import RedVelvet from './asset/RedVelvet.png'
import Teh from './asset/Teh.png'
import matchaa from './asset/matchaa.png'
import coklat from './asset/coklat.png'
import kopsu from './asset/kopsu.png'
import lemon from './asset/lemon.png'
import putih from './asset/putih.png'
import Fruit from './asset/Fruit.png'


// Data makanan
const foodItems = [
  {
    id: 1,
    name: 'Matcha',
    description: 'Teh hijau dan susu yang menghasilkan rasa creamy dengan pahit khas matcha.',
    price: '20k',
    image: matchaa,
  },
  {
    id: 2,
    name: 'Milo Dino',
    description: 'Cokelat Milo yang disajikan dengan taburan serbuk Milo di atasnya.',
    price: '20k',
    image: milow,
  },
  {
    id: 3,
    name: 'Fresh Litchy',
    description: 'Minuman segar dengan rasa manis dan khas dari buah leci.',
    price: '20k',
    image: putih,
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Minuman manis berwarna merah dengan rasa lembut dan creamy.',
    price: '20k',
    image: RedVelvet,
  },
  {
    id: 5,
    name: 'Original Tea',
    description: 'Minuman teh klasik dengan rasa alami dan segar.',
    price: '10k',
    image: Teh,
  },
  {
    id: 6,
    name: 'Kopsu Guren',
    description: 'Minuman kopi dengan campuran susu dan gula aren yang manis.',
    price: '15k',
    image: kopsu,
  },
  {
    id: 7,
    name: 'Fruit Punch',
    description: 'Minuman segar bersoda yang terbuat dari campuran berbagai buah.',
    price: '20k',
    image: Fruit,
  },
  {
    id: 8,
    name: 'Chocolate',
    description: 'Minuman coklat yang manis dan creamy.',
    price: '20k',
    image: coklat,
  },
  {
    id: 9,
    name: 'Amba Freeze',
    description: 'Perpaduan lemon, cold brew dan soda yang menyegarkan.',
    price: '20k',
    image: lemon,
  },
];

const Snack = () => {
  // Menggunakan React.createElement untuk membuat elemen
  return React.createElement(
    'div',
    { className: 'bg-yellow-800 p-6' },
    React.createElement(
      'h1',
      { className: 'text-4xl font-bold text-center text-stone-100 mb-8' },
      'Snack Series'
    ),
    // Daftar makanan
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' },
      foodItems.map((item) =>
        React.createElement(
          'div',
          {
            key: item.id,
            className: 'bg-stone-50 rounded-lg shadow-lg overflow-hidden',
          },
          React.createElement('img', {
            src: item.image,
            alt: item.name,
            className: 'w-full h-72 object-cover',
          }),
          React.createElement(
            'div',
            { className: 'p-4' },
            React.createElement(
              'h2',
              { className: 'text-xl font-semibold text-gray-800' },
              item.name
            ),
            React.createElement(
              'p',
              { className: 'text-gray-600 text-sm mb-2' },
              item.description
            ),
            React.createElement(
              'p',
              { className: 'text-lg font-bold text-gray-800' },
              `${item.price}`
            )
          )
        )
      )
    )
  );
};

export default Snack;
