import React from 'react';
import DrawerToggleBtn from './DrawerToggleBtn'

const Navbar = props => (
    <header className='navbar-header'>
        <nav className='navbar'>
            <div>
                <DrawerToggleBtn/>
            </div>
            <div className='navbar-logo'><a href='/'>THE LOGO</a></div>
            <div className='spacer'/>
            <div className='navbar-links'>
                <ul>
                    <li><a href='/'>One</a></li>
                    <li><a href='/'>Two</a></li>
                    <li><a href='/'>Three</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar