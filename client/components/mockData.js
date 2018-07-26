module.exports = {
  data: {
    id: 1,
    brand: 'Jockey',
    name: 'Kyra',
    productTier: 'Gluten-Free',
    productOptions: {
      color: ['green', 'white', 'blue', 'black', 'silver', 'purple'],
      size: ['S', 'M', 'L', 'XL'],
    },
    price: {
      msrp: 110.98,
      list: 99.88,
      sale: 99.88,
    },
    aboutProduct: [
      'Four dollar toast velit anim, ex cronut quis brooklyn hot chicken',
      'Umami coloring book enim, post-ironic aliquip taxidermy neutra adipisicing mixtape cupidatat glossier',
      'Distillery pinterest butcher farm-to-table, iceland synth brunch la croix',
    ],
    isPrime: 0,
    stockCount: 72,
    reviews: 359,
    stars: 4,
    questions: 48,
    seller: 'Aamazon',
    thumbnail: 'gluten-free.jpg',
  },
  related: [{
    id: 4,
    price: {
      msrp: 119.98,
      list: 89.98,
      sale: 89.98,
    },
    productTier: 'Turbo',
    thumbnail: 'Turbo.jpg',
  }],
};
