/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarItem from './NavbarItem'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <i class="fab fa-twitter"></i>
            <NavbarItem 
                text="Home"
                firstClass="fas"
                secondClass='fa-home'
            />
            <NavbarItem 
                text="Explore"
                firstClass="fas"
                secondClass='fa-hashtag'
            />
            <NavbarItem 
                text="Notifications"
                firstClass="far"
                secondClass='fa-bell'
            />
            <NavbarItem 
                text="Messages"
                firstClass="far"
                secondClass='fa-envelope'
            />
            <NavbarItem 
                text="Bookmarks"
                firstClass="far"
                secondClass='fa-bookmark'
            />
            <NavbarItem 
                text="Lists"
                firstClass="far"
                secondClass='fa-list-alt'
            />
            <NavbarItem 
                text="Profile"
                firstClass="far"
                secondClass='fa-user'
            />
            <NavbarItem 
                text="More"
                firstClass="fas"
                secondClass='fa-ellipsis-h'
            />
            <div className="tweet">Tweet</div>
        </div>
    )
}

export default Navbar
