import React from 'react'
import { Button } from 'react-bootstrap'

const Projects = props => {

        return(
            <div className='sub-landing-pgs'>
                <h1 className='page-title'>My Work...</h1>
                <div className='container projects-container'>
                    <div className='row projects-row'>
                        <div className='col-md-6 projects-col'>
                            <h6>DevProz</h6>
                            <img className='projects-pic' src='dist/myself.jpeg'/>
                            <p>A digital implementations of the card game 'What Do You Meme'</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                        <div className='col-md-6 projects-col'>
                            <h6>Never Bored</h6>
                            <img className='projects-pic' src='dist/myself.jpeg'/>
                            <p>An ecommerce site that sells board games</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                    </div>
                    <div className='row projects-row'>
                        <div className='col-md-6 projects-col'>
                            <h6>Support Group</h6>
                            <img className='projects-pic' src='dist/myself.jpeg'/>
                            <p>A resource center for grief support</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                        <div className='col-md-6 projects-col'>
                            <h6>Timnastics</h6>
                            <img className='projects-pic' src='dist/myself.jpeg'/>
                            <p>A site for freelance gymnastics coaching</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

export default Projects