import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,

} from './user.actions';

let initialState = {
    user: [],
    userLoading: true,
    userError: "",

}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
      
        case GET_USER_REQUEST:
            return {
                ...state,
                userLoading: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                user: action.payload
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                userError: action.payload,
                userLoading: false
            }
        default:
            return state;
    }
}

export default userReducers;