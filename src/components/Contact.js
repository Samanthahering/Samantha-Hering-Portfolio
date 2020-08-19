import React from 'react'
import Copyright from './Copyright-Footer'

const Contact = props => {
   
        return(
            <div className='sub-landing-pgs'>
                <h1 className='page-title'>Get in Touch!</h1>
                <div className='contact-page-info'>
                <i class="fas fa-map-marker-alt"></i>
                <p>Belle Mead, NJ</p>
                </div>
                <div className='contact-page-info'>
                <i class="fas fa-mobile-alt"></i>
                <p>908-967-7563</p>
                </div>
                <div className='contact-page-info'>
                <i class="far fa-envelope"></i>
                <p>samanthahering11@gmail.com</p>
                </div>
                
                

                

                <Copyright/>
            </div>
        )
    }


export default Contact