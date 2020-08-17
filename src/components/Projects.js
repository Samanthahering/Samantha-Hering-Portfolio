import React from 'react'
import { Button } from 'react-bootstrap'

const Projects = props => {

        return(
            <div className='sub-landing-pgs'>
                <h1 className='page-title'>My Work...</h1>
                <div className='container projects-container'>
                    <div className='row projects-row'>
                        <div className='col-md-6 projects-col'>
                            <h4>DevProz</h4>
                            <img className='projects-pic' src='dist/what-do-you-meme-project.png'/>
                            <p className='project-paragraph'>A digital implementations of the card game 'What Do You Meme'</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                        <div className='col-md-6 projects-col'>
                            <h4>Never Bored</h4>
                            <img className='projects-pic' src='dist/never-bored-project.png'/>
                            <p className='project-paragraph'>An ecommerce site that sells board games</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                    </div>
                    <div className='row projects-row'>
                        <div className='col-md-6 projects-col'>
                            <h4>Support Group</h4>
                            <img className='projects-pic' src='dist/grief-support-project.png'/>
                            <p className='project-paragraph'>A resource center for grief support</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                        <div className='col-md-6 projects-col'>
                            <h4>Timnastics</h4>
                            <img className='projects-pic' src='dist/timnastics-project.png'/>
                            <p className='project-paragraph'>A site for freelance gymnastics coaching</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='' target='_blank'>Github</a></Button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

export default Projects