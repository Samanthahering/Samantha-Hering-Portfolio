import React from 'react'
import Copyright from './Copyright-Footer'
import { Button } from 'react-bootstrap'

const Projects = props => {

        return(
            <div className='sub-landing-pgs'>
                <h1 className='page-title'>Projects...</h1>
                <div className='container projects-container'>
                    <div className='row projects-row'>
                        <div className='col-md-6 projects-col'>
                            <h4>DevProz</h4>
                            <h5>(Full Stack Application)</h5>
                            <img className='projects-pic' src='dist/what-do-you-meme-project.png'/>
                            <p className='project-paragraph'>A digital implementation of the card game 'What Do You Meme'</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='https://devproz.herokuapp.com/'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='https://github.com/DevProz/DevProz'>Github</a></Button>
                        </div>
                        <div className='col-md-6 projects-col'>
                            <h4>Never Bored</h4>
                            <h5>(Full Stack Application)</h5>
                            <img className='projects-pic' src='dist/never-bored-project.png'/>
                            <p className='project-paragraph'>A mock ecommerce site that sells board games</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='http://never-bored-games.herokuapp.com/'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='https://github.com/2004GraceShopper/GraceShopper'>Github</a></Button>
                        </div>
                    </div>
                    <div className='row projects-row'>
                        <div className='col-md-6 projects-col'>
                            <h4>Support Group</h4>
                            <h5>(Volunteer Work)</h5>
                            <img className='projects-pic' src='dist/grief-support-project.png'/>
                            <p className='project-paragraph'>A resource center for grief support</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='http://www.johnsantoscharitableorganization.org/'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='https://github.com/Samanthahering/Support-Group'>Github</a></Button>
                        </div>
                        <div className='col-md-6 projects-col'>
                            <h4>Timnastics</h4>
                            <h5>(Volunteer Work)</h5>
                            <img className='projects-pic' src='dist/timnastics-project.png'/>
                            <p className='project-paragraph'>A site for freelance gymnastics coaching</p>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='https://timnastics.com/index.html'>Live</a></Button>
                            <Button className='landing-page-btn' variant="outline-secondary"><a href='https://github.com/Samanthahering/Timnastics'>Github</a></Button>
                        </div>
                    </div>

                </div>
                <Copyright/>
            </div>
        )
    }

export default Projects