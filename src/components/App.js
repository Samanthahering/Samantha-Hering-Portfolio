import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
    constructor(){
        super()
        this.state = {
            sideDrawerOpen: false
        }
        this.drawerToggle = this.drawerToggle.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this)
    }
   
    drawerToggle(){
        this.setState({
            sideDrawerOpen: !this.state.sideDrawerOpen
        })
    }

    backdropClickHandler(){
        this.setState({
            sideDrawerOpen: false
        })

    }
    render(){
        let backdrop;

        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return(
            <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggle}/>
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
                {backdrop}
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/projects' component={Projects}/>
                            <Route path='/contact' component={Contact}/>
                        </Switch>
                    </Router>
            </React.Fragment>
        )
    }
}

export default App;