import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sneaker Vault',
      email: 'sneakervault.de@gmail.com',
      password: bcrypt.hashSync('sneakervaultde'),
      isAdmin: true,
    },
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: bcrypt.hashSync('johndoe1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Yeezy Boost 350 V2',
      slug: 'adidas-yeezyboost350v2-lifestyle',
      category: 'Lifestyle',
      image: '/images/product1.jpg', // 679px × 829px
      price: 229.99,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'Upper material: textile, Inner material: textile, Outsole: rubber',
    },
    {
      // _id: '2',
      name: 'Arizona',
      slug: 'birkenstock-arizona-outdoor',
      category: 'Outdoor',
      image: '/images/product2.jpg',
      price: 119.99,
      countInStock: 0,
      brand: 'Birkenstock',
      rating: 4.0,
      numReviews: 10,
      description: 'Surface material: leather, Inner material: leather, Outsole: rubber',
    },
    {
      // _id: '3',
      name: 'Air Force 1',
      slug: 'nike-airforce1-sneaker',
      category: 'Sneaker',
      image: '/images/product3.jpg',
      price: 129.99,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'Upper material: leather, Inner material: textile, Outsole: rubber',
    },
    {
      // _id: '4',
      name: 'Samba',
      slug: 'adidas-samba-lifetsyle',
      category: 'Lifestyle',
      image: '/images/product4.jpg',
      price: 119.99,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'Upper material: leather, Inner material: textile, Outsole: rubber',
    },
  ],
};
export default data;
