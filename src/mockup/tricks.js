// {
//     id: 0, number
//     title: '__some_title__',  string
//     order: 1, number
//     flow: '__some_description__', string
//     preparation: {
//         order: '__some_description_order__', string
//         doubleFace: 1, number/null
//         blankFace: 2, number/null
//         dublicate: null, number/null
//     }
// },

export const getTricks = () => {
  return DUMMY_TRICKS;
};

export const getOneTrick = (slug) => {
  return DUMMY_TRICKS.find(el => el.slug === slug);
};

export const DUMMY_TRICKS = [
  {
    id: 0,
    title: 'AQQA',
    slug: 'aqqa',
    order: 2,
    flow: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    preparation: {
      order: 'In start deck Ace Queen Quen Ace',
      blankFace: 2,
    },
  },
  {
    id: 1,
    title: 'Chicago opener',
    slug: 'chicago-opener',
    order: 1,
    flow: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    preparation: {
      order: 'In start deck some cards in order',
    },
  },
  {
    id: 2,
    title: '3 Monte',
    slug: '3-monte',
    order: 4,
    flow: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    preparation: {
      order: 'In start deck some cards in order',
    },
  },
  {
    id: 3,
    title: 'Super Mega Trick',
    slug: 'super-mega-trick',
    order: 3,
    flow: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    preparation: {
      dublicate: 'Color dublicate from another deck',
    },
  },
  {
    id: 4,
    title: 'One more trick',
    slug: 'one-more-trick',
    order: 5,
    flow: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
  },
];
