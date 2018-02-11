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


export function signupAction(user, selectedUser) {

    return dispatch => {

        console.log( user.selectedUser)

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully',  user.selectedUser);

                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + user.selectedUser + '/'+user.uid+'/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {

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


history.push('/home')

                    })
            })
    }
}










