import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
// import './studentCss.css'
import 'react-bootstrap';


import history from '../../History';

class student extends Component {
    constructor(props) {

        super(props);

        this.state = {
        //     name  : ''    ,
        //    fatherName  : ''    ,
        //     email :  ''   ,
        //     contactNumber  : ''    ,
        //     adress : ''   ,
        //     university :    ,
        //      semester:    ,
        //     gpa :  0  ,
        //  intrestedField   : '' , 
        //     : '' , 
        //     : '' , 
        //     : '' , 
        //     : '' , 
        //     : '' , 
        //     : '' , 
        //     : '' , 
        }
    }

    render() {
        return (
            <div>
           {/* <div className="container">
	<div className="row">
    <div className="col-md-4">
		<div className="form_main">
                <h4 className="heading"><strong>Student </strong> Registration <span></span></h4>
                <div className="form">
                <form action="contact_send_mail.php" method="post" id="contactFrm" name="contactFrm">
                    <input type="text" required="" placeholder="Please input your Name"  name="name" className="txt"/>
                    <input type="text" required="" placeholder="Please input your mobile No"  name="mob" className="txt"/>
                    <input type="text" required="" placeholder="Please input your Email"  name="email" className="txt"/>
                    
                	 <textarea placeholder="Your Message" name="mess" type="text" className="txt_3"></textarea>
                     <input type="submit" value="submit" name="submit" className="txt2"/>
                </form>
            </div>
            </div>
            </div>
	</div>
</div> */}
<div className="container">
	<div className="row">
	  <form role="form">
        <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
        </div>
        <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Name"/>
        </div>
        <div className="clearfix"></div>
        <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
        </div>
        <div className="clearfix"></div>
        <div className="form-group col-xs-10 col-sm-10 col-md-4 col-lg-4">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile"/>
            <p className="help-block">Example block-level help text here.</p>
        </div>
        <div className="clearfix"></div>
        <div className="col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <button type="submit" className="btn btn-default">Submit</button>
        </div>
    </form>
    <div className="clearfix"></div>

    <br /><br />
	</div>
</div>
            </div>)
    }


   
    
    
}
export default student ; 
// export default connect(mapStateToProp, mapDispatchToProp)(student);