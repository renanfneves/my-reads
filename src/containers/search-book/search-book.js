import React from 'react';
import PropTypes from 'prop-types';

import Book from '../../components/book';

import '../../App.css';

class SearchBook extends React.Component {
  constructor(props){
    super(props)

    this.updateBook = this.updateBook.bind(this);
  }
  state = {
    query: '',
    books: [],
    foundBooks: [],
    showNotFound: false,
  }

  componentDidMount() {
    this.props.getAll().then(books => this.setState({ books }))
  }

  searchBooks(query) {
    this.setState({ query, foundBooks: [] });
    if(!query) return;

    this.props.search(query).then(_books => {
      if(!_books || !_books.length) {
        this.setState({foundBooks: [], showNotFound: true});
        return;
      }

      const foundBooks = _books.map(foundBook => {
        const book = this.state.books.find(b => b.id === foundBook.id)

        if(book){
          foundBook.shelf = book.shelf;
        }

        return foundBook;
      })

      this.setState({ foundBooks, showNotFound: false });
    })
  }

  updateBook(book, shelf) {
    this.props.update(book, shelf).then(success => {
      const foundBooks = this.state.foundBooks.map(_book => {
        if(_book.id === book.id) {
          _book.shelf = shelf;
        }

        return _book;
      });

      this.setState({ foundBooks });
    });
  }

  getRandom() {
    return Math.random().toString(36).substr(-8)
  }

  render() {
    const { query, foundBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => {this.props.history.push('/')}}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={(e) => this.searchBooks(e.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          {
            this.state.showNotFound && <div className="empty-searching">
             Sorry! We haven't found books that fit your searching. Please try again.
            </div>
          }
          <ol className="books-grid">
            {
              foundBooks && foundBooks.length ? foundBooks.map(book =>
                <Book
                  {...book}
                  key={`${book.title.substr(0, 5).replace(/\s/g, "X")}-${this.getRandom()}`}
                  changeShelf={this.updateBook}
                />
              ) : null
            }
          </ol>
        </div>
      </div>
    );
  }
};

SearchBook.propTypes = {
  history: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  getAll: PropTypes.func.isRequired,
};

export default SearchBook;
