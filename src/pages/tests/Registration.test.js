import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../components/Registration';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';

describe("Registration", () => {
    describe("rendering of Registration", () => {
        it('renders without crashing Registration', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <Registration />, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })
    })
});