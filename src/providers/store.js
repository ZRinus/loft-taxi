import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/combine-reducers';
import GetUserMiddleWare from './middleware';

const initialState = {};

const store = createStore(rootReducer, initialState, 
   // applyMiddleware(GetUserMiddleWare));
    compose(applyMiddleware(thunk), applyMiddleware(GetUserMiddleWare)));

export default store;