import React from 'react';
import PropTypes from 'prop-types';

import Book from '../book';
import '../../App.css';

const Shelf = ({ title, books, changeShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      {
        books && !books.length && <div className="empty-shelf">
          Empty! You should add some books here.
        </div>
      }
      <ol className="books-grid">
        {
          books.map(book =>
            <Book {...book} key={book.title} changeShelf={changeShelf} />
          )
        }
      </ol>
    </div>
  </div>
);

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Shelf;
