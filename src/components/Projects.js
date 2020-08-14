import React from 'react'

const Projects = props => {

        return(
            <div className='sub-landing-pgs'>
                <h1 className='page-title'>Projects Page!</h1>
                <div className='container projects-container'>
                    <div className='row projects-row'>
                        <div className='col-sm-6 projects-col'>
                            <h6>Project 1</h6>
                            <img className='pic' src='dist/myself.jpeg'/>
                        </div>
                        <div className='col-sm-6 projects-col'>
                            <h6>Project 2</h6>
                            <img className='pic' src='dist/myself.jpeg'/>
                        </div>
                    </div>
                    <div className='row projects-row'>
                        <div className='col-sm-6 projects-col'>
                            <h6>Project 3</h6>
                            <img className='pic' src='dist/myself.jpeg'/>
                        </div>
                        <div className='col-sm-6 projects-col'>
                            <h6>Project 4</h6>
                            <img className='pic' src='dist/myself.jpeg'/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

export default Projects