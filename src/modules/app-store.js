import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import MainBoardModule from 'app/main-board';


const RootReducer = (state = {}, action) => {
    return {
        [MainBoardModule.constants.NAME]: MainBoardModule.reducer(
            state[MainBoardModule.constants.NAME],
            action,
        )
    }
}
const Store = createStore(RootReducer, applyMiddleware(thunk, logger()));
export default Store;