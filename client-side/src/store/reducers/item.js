import { FETCH_DATA_SUCCESS } from "../actions/actionType";

const initialState = {
    data: []
}

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {...state, data: action.payload}
        default:
            return state;
    }
}

export default itemReducer