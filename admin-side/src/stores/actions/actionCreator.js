import { FETCH_DATA_SUCCESS, 
        FETCH_CATEGORY_SUCCESS, 
        FETCH_ITEM_BY_ID_SUCCESS,
        FETCH_CATEGORY_BY_ID_SUCCESS
    } from "./actionType";
    import toast, { Toaster } from 'react-hot-toast';

export const fetchItemsSuccess = payload => {
    return { type: FETCH_DATA_SUCCESS, payload }
}
export const fetchCategorySuccess = payload => {
    return { type: FETCH_CATEGORY_SUCCESS, payload }
}
export const fetchItemByIdSuccess = payload => {
    return { type: FETCH_ITEM_BY_ID_SUCCESS, payload}
}

export const fetchCategoryByIdSuccess = payload => {
    return { type: FETCH_CATEGORY_BY_ID_SUCCESS, payload}
}

// LOGIN
export const login = (loginForm, navigate) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/login', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginForm)
            })
            if(!response.ok){
                throw { name: 'failed to login'}
            }
            response = await response.json()
            localStorage.setItem('access_token', response.access_token)
            navigate('/')

        } catch (error) {
            console.log(error.name);
        }
    }
}

// ITEM
export const fetchItemsStart = () => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/items', {
                headers: {
                    "access_token": localStorage.getItem('access_token')
                  }
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

export const addItemStart = (addItem) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/items', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem('access_token')
                },
                body: JSON.stringify(addItem)
            })
            if (!response.ok) {
                throw { name: 'failed to add item' }
            }
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const  getItemById = (id) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/items/' + id, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            if (!response.ok) {
                throw { name: 'failed to fetch item by id'}
            }
            response = await response.json()
            dispatch(fetchItemByIdSuccess(response))
           
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const editItem = (id, editedItem, navigate) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/items/' + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem('access_token')
                },
                body: JSON.stringify(editedItem)
            })
            if (!response.ok) {
                throw { name: 'failed to edit item' }
            }
            navigate('/item')
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const deleteItem = (id) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/items/' + id, {
                method: 'DELETE',
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            })
            if (!response.ok) {
                throw { name: 'failed to delete'}
            }
            dispatch(fetchItemsStart())
        } catch (error) {
            console.log(error.name);
        }
    }
}


// CATEGORY
export const fetchCategoryStart = () => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/categories', {
                headers: {
                    "access_token": localStorage.getItem('access_token')
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  }
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

export const addFormCategory = (payload, navigate) => {
    return async dispatch => {
        try {
            let response = await fetch ('https://restaurant-app.oktaviaqa.site/categories', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem('access_token')
                },
                body: JSON.stringify(payload)
            })
            if (!response.ok) {
                throw { name: 'failed to add category'}
            }
            navigate('/category')
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const  getCategoryById = (id) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/categories/' + id, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            if (!response.ok) {
                throw { name: 'failed to fetch category by id'}
            }
            response = await response.json()
            dispatch(fetchCategoryByIdSuccess(response))
           
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const editCategory = (id, editCategory, navigate) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/categories/' + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem('access_token')
                },
                body: JSON.stringify(editCategory)
            })
            if (!response.ok) {
                throw { name: 'failed to edit Category' }
            }
            navigate('/category')
        } catch (error) {
            console.log(error.name);
        }
    }
}

export const deleteDataCategory = (id) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/categories/' + id, {
                method: 'DELETE',
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            })
            if (!response.ok) {
                throw { name: 'failed to delete'}
            }
            dispatch(fetchCategoryStart())
        } catch (error) {
            console.log(error.name);
        }
    }
}

// REGISTER
export const registerStart = (formRegister) => {
    return async dispatch => {
        try {
            let response = await fetch('https://restaurant-app.oktaviaqa.site/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem('access_token')
                },
                body: JSON.stringify(formRegister)
            })
            if (!response.ok) {
                throw { name: 'failed to register' }
            }
        } catch (error) {
            console.log(error.name);
        }
    }
}
