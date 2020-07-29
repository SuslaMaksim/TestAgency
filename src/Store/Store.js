import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainReducer from '../Reducers/Reducer';
import FormReducer from "../Reducers/FormReducer";

let RootReducers = combineReducers({
    mainData: MainReducer,
    formData: FormReducer
})

let store = createStore(RootReducers,applyMiddleware(thunkMiddleware));

export default store;

window.store = store