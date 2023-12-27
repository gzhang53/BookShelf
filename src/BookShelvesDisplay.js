import React from 'react';
import BookShelfCategory from './BookShelfCategory.js';
import { Link } from 'react-router-dom';
const BookShelvesDisplay = ({books,
    onUpdateShelf
})=>{


    const shelfCategories = [
        {
          title: 'Currently Reading',
          category: 'currentlyReading',
          id: 'currentlyReadingShelfTray',
        },
        {
          title: 'Want to Read',
          category: 'wantToRead',
          id: 'wantToReadShelfTray',
        },
        {   title: 'Read', 
            category: 'read', 
            id: 'readShelfTray' },
      ];

    return(
        <div className="list-books">
        <div className="list-books-title">
        <h1>My</h1>
        </div>
        <div className="list-books-content">
            <div className="bookshelf">
            {shelfCategories.map((shelfCategory)=>(
                <BookShelfCategory Shelf={shelfCategory} key={shelfCategory.id} books={books} shelfName={shelfCategory.category} onUpdateShelf={onUpdateShelf}>

                </BookShelfCategory>
            ))}
            </div>
            </div>
            <div className="open-search">
            <Link to='/bookSearch'> Add a Book</Link>
          </div>
        </div>
        
        
    );
}


export default BookShelvesDisplay;