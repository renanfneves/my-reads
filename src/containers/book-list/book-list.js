import React from 'react';
import PropTypes from 'prop-types';

import Shelf from '../../components/shelf';

import '../../App.css';

const CURRENTLY_READING = "currentlyReading";
const WANT_TO_READ = "wantToRead";
const READ = "read";

const SHELVES = [
  {shelf: CURRENTLY_READING, title: "Currently Reading", },
  {shelf: WANT_TO_READ, title: "Want to read" },
  {shelf: READ, title: "Read"},
];

class BookList extends React.Component {
  constructor(props){
    super(props);

    this.changeShelf = this.changeShelf.bind(this);
  }
  state = {
    books: [],
  }

  componentDidMount() {
    this.props.getAll().then(books => {
      this.setState({ books })
    });
  }

  changeShelf(updatedBook, shelf){
    this.props.update(updatedBook, shelf).then(success => {
      const books = this.state.books.map(book => {
        if(book.id === updatedBook.id) {
          book.shelf = shelf
        }

        return book;
      });

        this.setState({ books });
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              SHELVES.map((_shelf, key) =>
                <Shelf
                      key={key}
                      books={books.filter(book => book.shelf === _shelf.shelf)}
                      title={_shelf.title}
                      changeShelf={this.changeShelf} />
              )
            }
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => { this.props.history.push('/search') }}>Add a book</a>
        </div>
      </div>
    );
  }
};

BookList.propTypes = {
  history: PropTypes.object.isRequired,
};

export default BookList;
