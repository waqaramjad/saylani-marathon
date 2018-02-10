import React, { Component } from 'react';
import { changeRecipientUID } from '../store/action/action'
import { connect } from 'react-redux';
import ChatBox from './chatbox';
import RenderChatAction from '../store/action/action'

class RenderChat extends Component {

    constructor(props)
    {
        super(props)
        this.state = {

            chats : []
        }
    }
    componentWillMount(){
        // console.log('componentWillMount')
        this.props.renderChat()
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.saveChats   )
        var a = nextProps.saveChats 
        this.setState({
            chats : a
        })
        console.log(this.state.chats)

    //    this.state.chats.map((value, index) => {
    //         })
    }

    render() {
        // console.log(this.state.chats[0])
        console.log(this.props.saveChats)
        this.state.chats.map((value, index) => {
            
        })
        let myData  = []
    

        return (
            
                <div>
        {this.props.saveChats.map((value, index) => {
            
            console.log(value, index)
            })}
                </div>
            
            


        )


    }
}
function mapStateToProp(state) {
console.log(state);
    // state.root.saveChats.map((value, index) => {
    
   

    //     // console.log(value)
   
    //     })
    // console.log(state.root)
    return ({
        currentUser: state.root.currentUser,
        saveChats: state.root.saveChats,
    })


}




function mapDispatchToProp(dispatch) {
    return ({
        renderChat: () => {
            dispatch(RenderChatAction());
        }
    })
}


export default connect(mapStateToProp, mapDispatchToProp)(RenderChat);


