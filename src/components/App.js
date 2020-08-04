import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'

class App extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <SideDrawer/>
                <Backdrop/>
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