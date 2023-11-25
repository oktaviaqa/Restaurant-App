import { FETCH_CATEGORY_SUCCESS } from "../actions/actionType";

const initialState = {
    data: []
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY_SUCCESS:
            return {...state, data: action.payload}
        default:
            return state;
    }
}

export default categoryReducer