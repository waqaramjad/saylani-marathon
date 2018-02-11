import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import student from './components/StudentPanel/student'
import Company from './components/company/company'

import 'react-bootstrap';

import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/student" component={student} />
                    <Route exact path="/company" component={Company} />
                    
                    
                </div>
            </Router>
        )
    }
}

export default Routers;