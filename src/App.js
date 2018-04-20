import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './api/BooksAPI'
import './App.css'

import BookList from './containers/book-list';
import SearchBook from './containers/search-book';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      <Route exact path='/' render={({ history }) => (
          <BookList
            history={history}
            getAll={BooksAPI.getAll}
            update={BooksAPI.update}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBook
            history={history}
            update={(book, shelf) => BooksAPI.update(book, shelf)}
            search={BooksAPI.search}
            getAll={BooksAPI.getAll}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
