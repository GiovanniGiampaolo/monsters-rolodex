import React from 'react'
import './search-box.styles.css'

// functional component usually render some html code
// gets some props and returns a html code

// @ts-ignore
export const SearchBox = ({placeholder, handleChange}) => (
    // @ts-ignore
    <input type='search' className="search" placeholder={placeholder} onChange={handleChange}/>
)
