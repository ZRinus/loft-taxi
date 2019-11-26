import React from 'react';
import ReactDOM from 'react-dom';
import PrivateZone from '../components/PrivateZone';
import { renderWithRedux } from './renderWithRedux'


describe("PrivateZone", () => {
    describe("rendering of PrivateZone", () => {

        it('renders without crashing PrivateZone', () => {
            const { } = renderWithRedux(<PrivateZone />)

        })
       /* it('renders without crashing PrivateZone', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <PrivateZone />, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })*/
    })
});