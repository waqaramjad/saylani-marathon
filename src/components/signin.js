import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signinAction} from '../store/action/action';
import './Css/signup.css'

class Signin extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            password: ''
        }


        this.signin = this.signin.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);

    }

    signin() {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.signinWithEmailPassword(user);
    }
    _onChangeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    _onChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    gotoSignUp(){

    }

    render() {
        return (
            <div>

<div className="container">

<div className="row main">
    <div className="main-login main-center">
    <h5>Sign In</h5>
        <form className="" method="post" action="#">
            

            <div className="form-group">
                <label linkTo="email" className="cols-sm-2 control-label">Your Email</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                        <input type="text" onChange={this._onChangeEmail}  className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                    </div>
                </div>
            </div>


            <div className="form-group">
                <label linkTo="password" className="cols-sm-2 control-label" >Password</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                        <input type="password" onChange={this._onChangePassword} className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                    </div>
                </div>
            </div>


            <div className="form-group ">
                <a onClick={this.signin} style={{color:'black',backgroundColor:'white'}} type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Register</a>
            </div>

            <h6>Dont have account <a onClick={this.signin}>SignUp here</a> </h6>
            
        </form>
    </div>
</div>
</div> 

                {/* <h1>Hello World Signin</h1>
                <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangePassword}/></label>
                <button onClick={this.signin}>Signin</button> */}
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signinWithEmailPassword: (user)=>{
            dispatch(signinAction(user))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signin);

