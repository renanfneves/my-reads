import React from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

const ShelvesOptions = ({ id, currentShelf, changeShelf }) => (
  <select value={currentShelf} onChange={e => changeShelf({ id }, e.target.value)}>
    <option value="" disabled>Move to...</option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>
);

ShelvesOptions.propTypes = {
  id: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
  currentShelf: PropTypes.string,
};

ShelvesOptions.defaultProps = {
  currentShelf: 'none',
};

export default ShelvesOptions;
