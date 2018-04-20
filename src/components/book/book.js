import React from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

import ShelvesOptions from '../shelves-options';

import defaultThumbnail from './default-thumbnail.jpeg';

const Book = ({
  id,
  title,
  authors,
  imageLinks,
  shelf,
  changeShelf
}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${(imageLinks && imageLinks.thumbnail) || defaultThumbnail}")`
      }} />
      <div className="book-shelf-changer">
        <ShelvesOptions id={id} currentShelf={shelf} changeShelf={changeShelf} />
      </div>
    </div>
    <div className="book-title">{title}</div>
    {
      authors && authors.length && authors.map(author =>
        <div
          className="book-authors"
          key={`${author.substr(0, 5).replace(/\s/g, "X")}${id}`}
        >
          {author}
        </div>
      )
    }
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  imageLinks: PropTypes.shape({
    smallThumbnail: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  shelf: PropTypes.string,
};

Book.defaultProps = {
  shelf: 'none',
};

export default Book;
