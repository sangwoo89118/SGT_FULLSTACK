
import types from '../actions/types';

const DEFAULT_STATE={
    success: false,
    errorMessage: ''
}

export default function(state=DEFAULT_STATE, action){
    switch(action.type){
        case types.ADD_STUDENT:
            console.log('data in reducer', action);
            if(!action.payload.data.success){
                return {success: action.payload.data.success, errorMessage:'There is something wrong with Server. Please try again'}
            }
            return {...state, success: true};
        default:
            return state;

    }
}
