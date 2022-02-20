import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wraped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return <Wraped {...props} bookstoreService={bookstoreService} />
          }
        }
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;