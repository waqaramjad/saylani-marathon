import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: 'Haider',
    currentUser:'',
    users: [],
    messages: {},
    recipientID: '',
    saveChats : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })   
        case ActionTypes.ALLUSERS:
            return ({
                ...state,
                users: action.payload
            }) 
        case ActionTypes.CHANGERECPUID:
            return ({
                ...state,
                recipientID: action.payload
            })
            case ActionTypes.MESSAGES:
                return ({
                    ...state,
                    messages: action.payload
                })
                
                case ActionTypes.SAVECHATS:
                console.log(action.payload)
                console.log(state)
                console.log(arr)
                var  arr = [];
            arr.push(action.payload)
                return ({
                    ...state,
                    saveChats: state.saveChats.concat(arr)
                })
            default:
            return state;
    }

}