import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: 'waqar' , 
    currentUserData : {}
  
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.CURRENTUSERDATA:
        console.log(action.payload)
            return ({
                ...state,
                currentUserData: action.payload
            })
                
            default:
            return state;
    }

}