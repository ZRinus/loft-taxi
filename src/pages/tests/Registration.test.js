import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../components/Registration';
import { renderWithRedux } from './renderWithRedux'

describe("Registration", () => {
    describe("rendering of Registration", () => {

        it('renders without crashing Registration', () => {
            const { } = renderWithRedux(<Registration />)

        })
      /*  it('renders without crashing Registration', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <Registration />, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })*/
    })
});