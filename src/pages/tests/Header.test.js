import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { AuthProvider } from '../../providers/AuthContext';
import Header from '../../header/Header';
import { toBeInTheDocument, toHaveClass, toHaveTextContent } from '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import { combineReducers }  from '../../providers/reducers/combine-reducers';
import rootReducer from '../../providers/reducers/combine-reducers';
import { initialState } from '../../providers/store';
import { BrowserRouter} from 'react-router-dom';
import { renderWithRedux } from './renderWithRedux'
expect.extend({ toBeInTheDocument, toHaveClass, toHaveTextContent })



describe("Header", () => {
    describe("rendering of Header", () => {
        it('renders without crashing Header', () => {

            const { } = renderWithRedux(<BrowserRouter><Header /></BrowserRouter>)

        })

        it('renders without crashing Header', () => {

            const { getByText } = renderWithRedux(<BrowserRouter><Header /></BrowserRouter>);
            expect(getByText("Войти")).toBeInTheDocument();
        })


    /*describe("rendering of Header", () => {
        it('renders without crashing Header', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <AuthProvider><Header /></AuthProvider>, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })

        it('renders without crashing Header', () => {
            const { getByText } = render(
                <AuthProvider isAuth={false}><Header /></AuthProvider>
            );

            expect(getByText("Войти")).toBeInTheDocument();
        });*/
    })
});