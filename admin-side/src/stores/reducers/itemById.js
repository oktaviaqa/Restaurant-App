import { FETCH_ITEM_BY_ID_SUCCESS } from "../actions/actionType"

const initialState = {
    data: []
}

export default function ItemByIdReducer(state = initialState, action){
    switch(action.type) {
        case FETCH_ITEM_BY_ID_SUCCESS:
            return {...state, data:action.payload}
        default:
            return state
    }
}