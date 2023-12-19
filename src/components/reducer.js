export const initialState = {
  cartList:[],
  productList:[{
    title: 'Do esse ad nisi dolor ullamco Lorem deserunt commodo do et excepteur.',
    price: '12.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg'
  },
  {
    title: 'Amet do fugiat officia exercitation exercitation eiusmod ad aliqua duis minim.',
    price: '82.00',
    rating: '2',
    imageURL: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg'
  },
  {
    title: 'Consequat eiusmod cillum tempor cillum excepteur velit laboris veniam.',
    price: '93.00',
    rating: '1',
    imageURL: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg.jpg'
  },
  {
    title: 'Tempor in exercitation do elit deserunt non adipisicing proident adipisicing est.',
    price: '48.00',
    rating: '5',
    imageURL: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg'
  },
  {
    title: 'Cupidatat aliquip laboris tempor eu eiusmod veniam velit cupidatat Lorem Lorem exercitation proident.',
    price: '59.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg'
  },
  {
    title: 'Quis officia culpa commodo ut laborum ex laboris elit aliqua irure mollit culpa dolore sunt.',
    price: '69.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg'
  },
  {
    title: 'Incididunt nisi aliqua elit nostrud dolore consequat deserunt nostrud laboris ipsum id deserunt commodo.',
    price: '78.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg'
  },
  {
    title: 'Voluptate aliqua qui deserunt cillum amet excepteur eu velit.',
    price: '89.00',
    rating: '3',
    imageURL: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg'
  },
  {
    title: 'Est cillum ad incididunt id quis magna pariatur ullamco aliqua nisi.',
    price: '9.00',
    rating: '2',
    imageURL: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
