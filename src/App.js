import React from 'react'
import { Route} from 'react-router-dom'

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
  //of the books' API. It requires book and shelf, we need to put it in the App.js because that's 
  //where our state lives

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

  //to update the UI after updating the shelf we need to call again getAll()

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

        <Route exact path = "/" render = {() => (
          <MainPage
            books = {this.state.books}
            updateShelf = {this.updateShelf}
        />
        )}/>
        
        <Route path = "/search" render = {() => (
          <SearchPage
           books = {this.state.books}
           updateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
