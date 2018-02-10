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
                {/* <h1>iuhiuhu</h1> */}

                           {/* blue form */}
   {/* End of blue form */}
    </div>
    


            // </div>
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

