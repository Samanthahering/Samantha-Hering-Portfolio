import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'

class App extends Component {
    constructor(){
        super()
        this.state = {
            sideDrawerOpen: false
        }
        this.drawerToggle = this.drawerToggle.bind(this)

    }
   
    drawerToggle(){
        this.setState({
            sideDrawerOpen: !this.state.sideDrawerOpen
        })
    }
    render(){
        let sideDrawer;
        let backdrop;

        if(this.state.sideDrawerOpen){
            sideDrawer = <SideDrawer/>;
            backdrop = <Backdrop/>
        }
        return(
            <React.Fragment>
                <Navbar/>
                {sideDrawer}
                {backdrop}
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                        </Switch>
                    </Router>
            </React.Fragment>
        )
    }
}

export default App;