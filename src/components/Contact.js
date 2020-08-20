import React from 'react'

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
                <div className='contact-page-info-links'>
                <a href='https://www.linkedin.com/in/samanthahering/'><i class="fab fa-linkedin"></i></a>
                <a href='https://github.com/Samanthahering'><i class="fab fa-github"></i></a>
                </div>
                <div className='contact-page-copyright'>
            <p>Copyright © Samantha Hering 2020</p>
        </div>
            </div>
        )
    }


export default Contact