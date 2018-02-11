import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'

class Add extends Component {
    constructor(props) {

        super(props);

        this.state = {
            Job : '' , 
            discrition : '' , 
            email : '' , 
            sallry : '' 

        }

        this.Job = this.Job.bind(this)
        this.discrition = this.discrition.bind(this)
        this.email = this.email.bind(this)
        this.sallry = this.sallry.bind(this)

    }

    Job(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            Job: value
        })
    }
    discrition(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            discrition: value
        })
    }
    email(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            email: value
        })
    }
    sallry(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            sallry: value
        })
    }



    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form_main">
                                <h4 className="heading"><strong>Create </strong> Job <span></span></h4>
                                <div className="form">
                                    <form id="contactFrm" name="contactFrm">
                                        <input type="text" onChange={this.Job} required="" placeholder="Job Type" name="Job" className="txt" />
                                        <input type="text" onChange={this.discrition} required="" placeholder="discrition" name="discrition" className="txt" />
                                        <input type="text" onChange={this.email} required="" placeholder="email" name="email" className="txt" />
                                        <input type="text" onChange={this.sallry} required="" placeholder="sallry" name="sallry" className="txt" />
                                        {/* <input type="text" onChange={this.university} required="" placeholder="university" name="university" className="txt" />
                                        <input type="number" onChange={this.semester} required="" placeholder="semester" name="semester" className="txt" />
                                        <input type="number" onChange={this.gpa} required="" placeholder="gpa" name="gpa" className="txt" />
                                        <input type="text" onChange={this.intrestedField} required="" placeholder="intrestedField" name="intrestedField" className="txt" /> */}

                                        <textarea placeholder="Your Message" name="mess" type="text" className="txt_3"></textarea>
                                        <input type="submit" value="submit" onClick={this.sendData} name="submit" className="txt2" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          )  }

        
   

    
}


// function mapStateToProp(state) {
//     return ({
//         userDataInSignUp: state.root
//     })
// }

// function mapDispatchToProp(dispatch) {
//     return ({
//         // changeUserName: ()=>{dispatch(changeUserName())}
//         sendStudentDataToForm: (user) => {
//             dispatch(sendStudentData(user))
//         }
//     })
// }

export default Add ; 
// export default connect(mapStateToProp, mapDispatchToProp)(Add);