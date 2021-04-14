import axios from 'axios';

//FETCH USER 
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

//GET USER BY ID
export const getUserById = (userId) => {

    return (dispatch) => {

        dispatch(getUserRequest());

        const options = {
            method: 'GET',
            url: `http://localhost:3001/users/${userId}`,
            headers:{ 
                'Content-Type': 'application/json' 
            }
        };

        axios.request(options).then(user => {
            dispatch(getUserSuccess(user.data));
        }).catch(error => {
            dispatch(getUserFailure(error));
        });
    };
};

export const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST,
    };
};
export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    };
};
export const getUserFailure = (error) => {
    return {
        type: GET_USER_FAILURE,
        payload: error
    };
};