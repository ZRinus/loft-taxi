import React from 'react';
import { render} from '@testing-library/react';
import { toBeInTheDocument, toHaveClass, toHaveTextContent } from '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../providers/reducers/combine-reducers';
import {  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import GetUserMiddleWare from '../../providers/middleware';

expect.extend({ toBeInTheDocument, toHaveClass, toHaveTextContent })




export function renderWithRedux(
    ui,
    { initialState, store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), applyMiddleware(GetUserMiddleWare))) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      // adding `store` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      store,
    }
  }