import React, { useState } from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({book, onUpdateBook})=>{

const bookShelfUpdater = (shelf)=>{

    onUpdateBook(book, shelf);
}

const getThumbnail = () => {
    const thumbnail = book.imageLinks.thumbnail?
       `url(${book.imageLinks.thumbnail})`
      : ``;
    return thumbnail;
  };


return(
            <div className="book">
                <div className="book-top">
                            
                            <div
                                className="book-cover"
                                style={{
                                width: 128,
                                height: 193,
                                backgroundImage:getThumbnail()
                                    // `url(${book.imageLinks.thumbnail})`,
                                }}
                            >

                            </div>
                            <BookShelfChanger shelf={book.shelf} onUpdateShelf={bookShelfUpdater}>
                            </BookShelfChanger>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.publisher}</div>
                            
                            
                       
                        </div>

                        )    };

export default Book;