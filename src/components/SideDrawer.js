import React from 'react';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    return(
            <nav className={drawerClasses}>
                <div className='exit-btn'>
                    <h6 className='close-x' onClick={props.click}>X</h6>
                </div>
                <ul>
                    <li><a href='/'>One</a></li>
                    <li><a href='/'>Two</a></li>
                    <li><a href='/'>Three</a></li>
                </ul>
            </nav>

)}

export default SideDrawer;