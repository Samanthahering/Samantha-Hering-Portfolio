import React from 'react';
import DrawerToggleBtn from './DrawerToggleBtn'

const Navbar = props => (
    <header className='navbar-header'>
        <nav className='navbar'>
            <div className='navbar-toggle-button'>
                <DrawerToggleBtn click={props.drawerClickHandler}/>
            </div>
            <div className='navbar-logo'><a href='/'>Samantha Hering</a></div>
            <div className='spacer'/>
            <div className='navbar-links'>
                <ul>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/projects'>Projects</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar