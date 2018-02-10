import ActionTypes from '../constant/constant';
import history from '../../History';
import firebase from 'firebase';



var config = {
    apiKey: "AIzaSyDcyZcVQP8nuHcMJsKd5wHxoaerUW6apZQ",
    authDomain: "waqarchatapp.firebaseapp.com",
    databaseURL: "https://waqarchatapp.firebaseio.com",
    projectId: "waqarchatapp",
    storageBucket: "waqarchatapp.appspot.com",
    messagingSenderId: "676235345078"
};
firebase.initializeApp(config);



export function changeUserName() {
    return dispatch => {
        dispatch({ type: ActionTypes.USERNAME, payload: 'Ali' })
    }
}


export function signupAction(user) {

    return dispatch => {

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                // console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {
                                let allUsers = userData.val();
                                let currentUserUid = firebase.auth().currentUser.uid;
                                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                                firebase.database().ref('message/').once('value')
                                    .then((messagesData) => {
                                        let messages = messagesData.val();
                                        // console.log(messages);
                                        dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                        history.push('/chat');
                                    })

                            })
                    })


            })



    }
}



export function signinAction(user) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        // console.log(allUsersArr);
                        dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                        firebase.database().ref('message/').once('value')
                            .then((messagesData) => {
                                let messages = messagesData.val();
                                // console.log(messages);

                                dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                history.push('/chat');
                            })




                    })
            })
    }
}










