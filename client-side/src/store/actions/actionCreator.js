import {
    FETCH_DATA_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_BY_ID_SUCCESS,
    FETCH_ITEM_BY_ID_SUCCESS
} from "./actionType";

export const fetchItemsSuccess = payload => {
    return { type: FETCH_DATA_SUCCESS, payload }
}
export const fetchCategorySuccess = payload => {
    return { type: FETCH_CATEGORY_SUCCESS, payload }
}
export const fetchCategoryByIdSuccess = payload => {
    return { type: FETCH_CATEGORY_BY_ID_SUCCESS, payload }
}
export const fetchItemByIdSuccess = payload => {
    return { type: FETCH_ITEM_BY_ID_SUCCESS, payload }
}

// ITEM
export const fetchItemsStart = () => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/client/items', {
            })
            if (!response.ok) {
                throw { name: 'failed to fetch items' }
            }
            response = await response.json()
            dispatch(fetchItemsSuccess(response))
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const getItemById = (id) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/client/items/' + id, {
            })
            if (!response.ok) {
                throw { name: 'failed to fetch item by id' }
            }
            response = await response.json()
            dispatch(fetchItemByIdSuccess(response))

        } catch (error) {
            console.log(error.name);
        }
    }
}


// CATEGORY
export const fetchCategoryStart = () => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/client/categories', {
            })
            if (!response.ok) {
                throw { name: 'failed to fetch categories' }
            }
            response = await response.json()
            dispatch(fetchCategorySuccess(response))
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const getCategoryById = (id) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/client/categories/' + id, {
            })
            if (!response.ok) {
                throw { name: 'failed to fetch category by id' }
            }
            response = await response.json()
            dispatch(fetchCategoryByIdSuccess(response))

        } catch (error) {
            console.log(error.name);
        }
    }
}
