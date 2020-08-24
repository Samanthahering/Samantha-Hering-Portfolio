import React from 'react';
import Copyright from './Copyright-Footer'


const About = props => {
    
        return(
            <div className='sub-landing-pgs'>
                    <h1 className='page-title'>The Journey...</h1>
                    <div className='about-info'>
                        <img className='picture-of-myself' src='https://boring-wing-4b9199.netlify.app/dist/myself.jpeg' alt='Picture of Samantha'></img>
                        <p className='paragraph-about-myself'>I am a self- motivated full stack software developer with an eagerness to learn! I am coming from a background in Elementary Education and while I loved teaching my students, I was quickly overcome by feelings of stagnation and eagerness to be in a position where I could constantly grow and learn. 
                        I then decided to put my efforts into a new career path and began learning HTML and CSS through Udemy. I started to dive into JavaScript but after I had learned the basics, I realized I needed the help of a structured environment to help me reach the next level and thats when I applied for the Grace Hopper Program at Fullstack Academy!
                        In my new career path, I am looking forward to building really interesting and useful projects! I am now in a field where I will be a forever learner so I’m excited to see my growth and progress as I continue forward.
                        </p>
                    </div>
                    <hr></hr>
                    <div className='skill-set'>
                        <div>
                            <h4 className='skill-set-title'>Skill Set:</h4>
                                <div className='skill-set-bullets'>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>Sequelize</li>
                                    </ul>
                                    <ul>
                                        <li>Postgres</li>
                                        <li>Socket.io</li>
                                        <li>Git</li>
                                        <li>Github</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                    </ul>
                                </div>
                        </div> 
                        <img className='picture-of-code-icon' src='/dist/code-icon.png' alt='Picture of Code Icon'></img>
                    </div>
                    <Copyright/>
            </div>
        )
    }


export default About;