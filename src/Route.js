import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
// import Home from './components/home';
// import About from './components/about';
import Signup from './components/signup';
import Signin from './components/signin';

// import Chat from './components/chat';

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
                    
                    
                </div>
            </Router>
        )
    }
}

export default Routers;