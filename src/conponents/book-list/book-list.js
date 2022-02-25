import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchBooks } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';

import './book-list.css';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books }) => {
  return (
    <ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book} /></li>
          )
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }
    return <BookList books={books} />

  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispathToProps = (dispatch, { bookstoreService }) => {
  // console.log('ownProps :>> ', ownProps);
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispathToProps)
)(BookListContainer);