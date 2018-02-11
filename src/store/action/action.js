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

        console.log(user.selectedUser)

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', user.selectedUser);

                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + user.selectedUser + '/' + user.uid + '/').set(user)
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
                console.log(signedinUser.uid)
                if (signedinUser.uid =='j8HPX9vawIMc0ezcSixDHj0rzCn1') {

                    history.push('/Admin')

                }
                else {
                    firebase.database().ref('users/' + user.selectUser + '/' + signedinUser.uid).once('value')
                        .then((userData) => {
                            console.log(userData.val());
                            let userDataFromFirebase = userData.val()
                            let myData = {
                                email: userDataFromFirebase.email,
                                uid: userDataFromFirebase.uid,
                                userName: userDataFromFirebase.username

                            }
                            console.log(myData)
                            dispatch({ type: ActionTypes.CURRENTUSERDATA, payload: myData })




                            history.push('/' + user.selectUser)

                        })
                }
            })
    }

}






export function sendStudentData(user) {
    return dispatch => {
        user.userUid
        console.log('hy', user)

        firebase.database().ref('users/student/' + user.userUid + '/profile').set(user)
            .then((data) => {


            })
        firebase.database().ref('users/profiles/' + user.userUid).update(user)
            .then((data) => {


            })
    }


}
export function sendAddsData(user) {
    return dispatch => {
        console.log(user)

        user.userUid
        console.log('hy', user)

        // firebase.database().ref('users/company/' + user.userUid + '/jobs').set(user)
        //     .then((data) => {


        //     })
        firebase.database().ref('users/Jobs/' ).push(user)
            .then((data) => {


            })
    }


}
// }
export function getStudentDataByCompany(data) {
    return dispatch => {
        console.log('getStudentDataByCompany')

        firebase.database().ref('users/profiles').once('value')
            .then((data) => {

                console.log('action')
                console.log(data.val())
                let userData = data.val();

                dispatch({ type: ActionTypes.GETSTUDENTBYCOMPANY, payload: userData })





            })
    }
}









