import React from 'react';
import ReactDOM from 'react-dom';
import LogOut from '../components/LogOut';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';
import PrivateZone from '../components/PrivateZone';


describe("PrivateZone", () => {
    describe("rendering of PrivateZone", () => {
        it('renders without crashing PrivateZone', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <PrivateZone />, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })
    })
});