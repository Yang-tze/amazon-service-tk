module.exports = {
  data: {
    id: 1,
    brand: 'Jockey',
    product_name: 'Kyra',
    product_tier: 'Nano',
    product_options: {
      color: ['green', 'white', 'blue', 'black', 'silver', 'purple'],
      size: ['S', 'M', 'L', 'XL'],
    },
    product_price: {
      msrp: 110.98,
      list: 99.88,
      sale: 99.88,
    },
    descriptions: [
      'Four dollar toast velit anim, ex cronut quis brooklyn hot chicken',
      'Umami coloring book enim, post-ironic aliquip taxidermy neutra adipisicing mixtape cupidatat glossier',
      'Distillery pinterest butcher farm-to-table, iceland synth brunch la croix',
    ],
    is_prime: 0,
    stock_count: 72,
    review_totals: [7, 5, 12, 85, 120],
    num_questions: 48,
    seller_name: 'Aamazon',
    // thumbnail: 'Nano.jpg',
  },
  related: [
    {
      id: 4,
      price: {
        msrp: 119.98,
        list: 89.98,
        sale: 89.98,
      },
      tier: 'Turbo',
      // thumbnail: 'Turbo.jpg',
    },
  ],
};
