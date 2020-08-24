import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Home extends Component {
    render(){
        return(
            <div id='landing-page'>
                <h1 className='landing-pg-name'>Samantha Hering</h1>
                <h2 className='landing-pg-job-title'>Software Developer</h2>
                <a href='/resume.pdf'><Button className='landing-page-btn' variant="outline-secondary" size='lg'>Resume</Button></a>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/samanthahering/'><i class="fab fa-linkedin"></i></a>
                <a href='https://github.com/Samanthahering'><i class="fab fa-github"></i></a>
            </div>
            <div className='landing-page-copyright'>
            <p>Copyright © Samantha Hering 2020</p>
        </div>
        </div>
        )
    }
}

export default Home;