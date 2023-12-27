import React,{ useEffect, useState } from "react";


const BookShelfChanger = ({shelf, onUpdateShelf})=>{
                                  
    const [selected, setSelected] = useState('');
    
    useState(()=>setSelected(shelf));

    const onShelfChange = (e)=>{

        setSelected(e.target.value);
        onUpdateShelf(e.target.value);
        

    };

    return (
    <div className="book-shelf-changer">
         <select value={selected} onChange={onShelfChange}>
            <option value="none" disabled>
            Move to...
            </option>
            <option value="currentlyReading">
            Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select> 
    </div>)
};

export default BookShelfChanger;