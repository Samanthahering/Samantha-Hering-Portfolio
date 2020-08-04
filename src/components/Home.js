import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Home extends Component {
    render(){
        return(
            <div id='landing-page'>
            <h1>Samantha Hering</h1>
            <h2>Software Developer</h2>
            <Button className='landing-page-btn' variant="outline-secondary" size='lg'>Resume</Button>
        </div>
        )
    }
}

export default Home;