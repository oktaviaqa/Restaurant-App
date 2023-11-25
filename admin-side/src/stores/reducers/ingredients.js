import { FETCH_INGREDIENT_SUCCESS } from "../actions/actionType";

const initialState = {
    data: []
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INGREDIENT_SUCCESS:
            return {...state, data: action.payload}
        default:
            return state;
    }
}

export default categoryReducer