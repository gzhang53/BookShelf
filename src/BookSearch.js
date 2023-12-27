import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI.js";
import Book from "./Book.js";
import { Link } from "react-router-dom";

const BookSearch = ({books, onUpdateBook}) => {
    

    const [resBooks, setResBooks] = useState([]);

    const [query, setQuery] = useState("");

    

    
    const updateQuery = (query) => {
        setQuery(query);
        
      };

      useEffect(() => {
       
          const getBooks = async () => {
            const res = await BooksAPI.search(String(query));
            res.error !== 'empty query'
              ? AddShelfInfo(res,books)
              : setResBooks();
          };
    
          query !== '' ? getBooks() : setResBooks();
        
        
      });
     

    const AddShelfInfo=(bookSearch,bookOnShelf)=>{

        const ShelfBookMap = BooksMap(bookOnShelf);

        const merged = bookSearch.map((book)=> ShelfBookMap.get(book.id)||book);

        consolidatedBooks(merged);
    }

    const consolidatedBooks = (bookArray)=>{
      let BookSearchFinalArray = [];


      bookArray.map((book)=> {book.shelf?
      void 0:
      (book.shelf = 'None');
      BookSearchFinalArray.push(book)})
      setResBooks(BookSearchFinalArray);

    }

    const BooksMap =(books)=>{

        const bookmap = new Map();
       

        books.map((book)=>bookmap.set(book.id,book))
        

        return bookmap;

    }

        
       
   

    
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            name="book-data"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      <ol className="books-grid">
        {resBooks ? (
          resBooks.map((book) => (
            <li key={book.id}>
              <Book
                key={book.id}
                book={book}
                onUpdateBook={onUpdateBook}
              ></Book>
            </li>
          ))
        ) : (
          <div>
            <p>No Books found</p>
          </div>
        )}
      </ol>
    </div>
  );
};

export default BookSearch;
