import { FETCH_CATEGORY_BY_ID_SUCCESS } from "../actions/actionType"

const initialState = {
    data: []
}

export default function CategoryByIdReducer(state = initialState, action){
    switch(action.type) {
        case FETCH_CATEGORY_BY_ID_SUCCESS:
            return {...state, data:action.payload}
        default:
            return state
    }
}