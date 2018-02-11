import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
// import history from '../../History';

class Nav extends Component {
    constructor(props) {

        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
               <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Campus Requitment System</a>
    </div>
    <ul className="nav navbar-nav">
      {/* <li className="active"><a href="#">Home</a></li> */}
      {/* <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li> */}
    </ul>
  </div>
</nav>
            </div>)
    }


   
    
    
}
export default Nav ; 
// export default connect(mapStateToProp, mapDispatchToProp)(student);