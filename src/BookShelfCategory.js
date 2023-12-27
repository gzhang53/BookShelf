import React from 'react';
import Book from './Book';


const BookShelfCategory = ({
    Shelf,
    books,
    shelfName,
    onUpdateShelf})=>{


    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{Shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book)=>book.shelf === shelfName)
                        .map((thisBook)=>(
                            <li key={thisBook.id}>
                            <Book book={thisBook} onUpdateBook={onUpdateShelf}>
 
                            </Book>
                            </li>
                        ))
                        }
                    
                        
                    </ol>
                </div>
        </div>
    );
};


export default BookShelfCategory;