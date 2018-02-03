
import types from '../actions/types';

const DEFAULT_STATE={
    list : []
}

export default function(state=DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_STUDENTS:
            return {list: action.payload.data.data}
        case types.ADD_STUDENTS:
            console.log('reducer action:', action);
            return state
        default:
            return state;
    }
}
