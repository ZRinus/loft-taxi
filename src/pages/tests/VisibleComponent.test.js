import React from 'react';
import ReactDOM from 'react-dom';
import VisibleComponent from '../VisibleComponent';
import { BrowserRouter} from 'react-router-dom';
import { renderWithRedux } from './renderWithRedux'


describe("VisibleComponent", () => {
    describe("rendering of VisibleComponent", () => {
        it('renders without crashing VisibleComponent', () => {
            const { } = renderWithRedux(<BrowserRouter><VisibleComponent /></BrowserRouter>)

        })
    })
});