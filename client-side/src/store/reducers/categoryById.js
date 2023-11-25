import { FETCH_CATEGORY_BY_ID_SUCCESS } from "../actions/actionType";

const initialState = {
    data: {}
}

function categoryByIdReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY_BY_ID_SUCCESS:
            return {...state, data: action.payload}
        default:
            return state;
    }
}

export default categoryByIdReducer