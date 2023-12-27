import React,{ useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI.js";
import BookShelvesDisplay from './BookShelvesDisplay.js';
import BookSearch from "./BookSearch.js";


function App() {
  const [books, setBooks] = useState([]);

  const [showSearchPage, setShowSearchpage] = useState(false);

  useEffect(()=>{
      const getBooks = async()=> {
      const res = await BooksAPI.getAll();
      setBooks(res);
      
    };
    getBooks();}
  ,[]);
  
  
  const onUpdateShelf = (book,newShelf)=>{

    const updateBooks = async()=> {
      const res = await BooksAPI.update(book,newShelf);
      const res2 = await BooksAPI.getAll();
      setBooks(res2);
    };
    updateBooks();
  }
  return (
    <Routes>
    <Route exact path="/" element={<BookShelvesDisplay books={books}
      onUpdateShelf={onUpdateShelf}></BookShelvesDisplay>}>

    </Route>
    <Route exact path="/bookSearch" element={<BookSearch books={books} onUpdateBook={onUpdateShelf}></BookSearch>}>

    </Route>
    
    </Routes>
  );
}

export default App;
