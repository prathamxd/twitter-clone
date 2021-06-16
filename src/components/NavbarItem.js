import React from 'react'
import '../styles/Navbar.css'

function NavbarItem(props) {
    return (
        <div className='navbar-item'>
            <i className={`${props.firstClass} ${props.secondClass} icons`}></i>
            <h2 className='navbar-option'>{props.text}</h2>
        </div>
    )
}

export default NavbarItem
