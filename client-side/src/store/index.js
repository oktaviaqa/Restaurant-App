import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import itemReducer from './reducers/item';
import categoryReducer from './reducers/category';
import thunk from 'redux-thunk'
import categoryByIdReducer from './reducers/categoryById';
import itemByIdReducer from './reducers/itemById';

const reducers = combineReducers({
   item: itemReducer,
   category: categoryReducer,
   categoryById: categoryByIdReducer,
   itemById: itemByIdReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


export default store
