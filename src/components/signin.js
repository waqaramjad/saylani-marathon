import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signinAction} from '../store/action/action';
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

    render() {
        return (
            <div>

<div className="container">

<div className="row main">
    <div className="main-login main-center">
    <h5>SignUP</h5>
        <form className="" method="post" action="#">
            
            <div className="form-group">
                <label linkTo="name" className="cols-sm-2 control-label">Your Name</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                        <input type="text" onChange={this._onChangeUserName} className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
                    </div>
                </div>
            </div>

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
                <label linkTo="username" className="cols-sm-2 control-label">Username</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control"  name="username" id="username"  placeholder="Enter your Username"/>
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
                <a onClick={this.signup} style={{color:'black',backgroundColor:'white'}} type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Register</a>
            </div>
            
        </form>
    </div>
</div>
</div> 

                <h1>Hello World Signin</h1>
                <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangePassword}/></label>
                <button onClick={this.signin}>Signin</button>
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

