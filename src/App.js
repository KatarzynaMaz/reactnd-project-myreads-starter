import React from 'react'

import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  //fetching the books
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  
  // In order to update shelf with a new book, we need to have an update method
  //it requires book and shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   
  render() {
    console.log(this.state.books);
      return (
      <div className="app">
        {/*<MainPage
        //defining props so MainPage will have access to state 
        books = {this.state.books}
        updateShelf = {this.updateShelf}
        />*/}
        <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
