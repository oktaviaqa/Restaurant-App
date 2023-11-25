import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import itemReducer from './reducers/item';
import categoryReducer from './reducers/category';
import thunk from 'redux-thunk'
import ItemByIdReducer from './reducers/itemById';
import CategoryByIdReducer from './reducers/categoryById';

const reducers = combineReducers({
   item: itemReducer,
   category: categoryReducer,
   itemById: ItemByIdReducer,
   categoryById: CategoryByIdReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


export default store
