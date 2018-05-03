import { createStore, combineReducers } from 'redux';
import profileInfo from './reducer/profileInfo.reducer';



let rootReducer = combineReducers({
    profileInfo
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );