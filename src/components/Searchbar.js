import React from 'react'
import '../styles/Searchbar.css'

function Searchbar() {
    return (
        <div className='searchbar'>
            <i class="fas fa-search"></i>
            <input type="text" name="name" placeholder="Search Twitter" autocomplete="off"/>
        </div>
    )
}

export default Searchbar
