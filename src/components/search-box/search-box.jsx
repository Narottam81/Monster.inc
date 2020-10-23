import React from 'react';
import './search-box.css';

const SearchBox = ({placeholder, handleChange}) => (
    <div>
     <input className="search-box" 
     type ='search'
      placeholder={placeholder} 
      onChange ={handleChange}/>
     </div>
);

export default SearchBox;


