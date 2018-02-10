import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signupAction} from '../store/action/action';
import 'react-bootstrap';
import './Css/signup.css'
class Signup extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            userName: '',
            password: ''
        }


        this.signup = this.signup.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangeUserName = this._onChangeUserName.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);

    }

    signup() {
        let user = {
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password
        }
        this.setState({
            email: '',
            userName: '',
            password: ''
        })
        this.props.signupwithEmailPassword(user);
        // console.log(this.props)
    }
    _onChangeEmail(event){
        // // console.log(event.target.value)
        // console.log(this.state , 'odifjoig')

        this.setState({
            email:event.target.value
        })
    }
    _onChangeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    _onChangePassword(event){
        // console.log(event.target.value , 'iufhgud')
        
        this.setState({
            password:event.target.value
        })
    }

    render() {
        return (
            <div>

{/* <div className="span3 well">
      <legend>New to WebApp? Sign up!</legend>
    <form accept-charset="UTF-8" action="" method="post">
		<input className="span3" name="name" placeholder="Full Name" type="text"/> 
        <input className="span3" name="username" placeholder="Username" type="text"/>
        <input className="span3" name="password" placeholder="Password" type="password"/> 
        <button className="btn btn-warning" type="submit">Sign up for WebApp</button>
    </form>
</div> */}
                
                {/* <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn">Basic</button>
                <h1>Hello World Signup</h1>
                <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <label>User Name:<input type='text' name='username' value={this.state.userName} onChange={this._onChangeUserName}/></label>
                <br />
                <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangePassword}/></label>
                <button onClick={this.signup}>Signup</button> */}

<div className="container">
			<div className="row main">
				<div className="main-login main-center">
				<h5>Sign up\</h5>
					<form className="" method="post" action="#">
						
						<div className="form-group">
							<label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" onChange={this._onChangeUserName} className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" onChange={this._onChangeEmail}  className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
								</div>
							</div>
						</div>


						<div className="form-group">
							<label htmlFor="password" className="cols-sm-2 control-label" >Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" onChange={this._onChangePassword} className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>


						<div className="form-group ">
							<a onClick={this.signup} style={{color:'black' , backgroundColor:'white'}} type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Register</a>
						</div>
						
					</form>
				</div>
			</div>
		</div>
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
        signupwithEmailPassword: (userDetails)=>{
            dispatch(signupAction(userDetails));
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signup);

