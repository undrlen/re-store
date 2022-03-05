const updateItems = (state, book, id, quantity) =>
  state.shoppingCart.cartItems
    .map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          title: item.title,
          count: item.count + quantity,
          total: item.total + quantity * book.price,
        };
      }
      return item;
    })
    .filter((el) => el.count);

const newItems = (book) => ({
  id: book.id,
  title: book.title,
  count: 1,
  total: book.price,
});

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      const upd = updateItems(
        state,
        state.bookList.books.find((book) => book.id === action.payload),
        action.payload,
        1
      );
      const newOne = newItems(
        state.bookList.books.find((book) => book.id === action.payload)
      );
      const repeat = state.shoppingCart.cartItems.find(
        (items) => items.id === action.payload
      );
      return {
        ...state,
        cartItems: repeat ? upd : [...state.shoppingCart.cartItems, newOne],
      };

    case "BOOK_DELETED_TO_CART":
      return {
        ...state,
        cartItems: state.shoppingCart.cartItems.filter(
          (el) => el.id !== action.payload
        ),
      };

    case "BOOK_PLUS_TO_CART":
      return {
        ...state,
        cartItems: updateItems(
          state,
          state.bookList.books.find((book) => book.id === action.payload),
          action.payload,
          1
        ),
      };

    case "BOOK_MINUS_TO_CART":
      return {
        ...state,
        cartItems: updateItems(
          state,
          state.bookList.books.find((book) => book.id === action.payload),
          action.payload,
          -1
        ),
      };

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
