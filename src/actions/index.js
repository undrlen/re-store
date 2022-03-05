
const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};

export const bookDeletedToCart = (bookId) => {
  return {
    type: "BOOK_DELETED_TO_CART",
    payload: bookId,
  };
};

export const bookPlusToCart = (bookId) => {
  return {
    type: "BOOK_PLUS_TO_CART",
    payload: bookId,
  };
};

export const bookMinusToCart = (bookId) => {
  return {
    type: "BOOK_MINUS_TO_CART",
    payload: bookId,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks };
