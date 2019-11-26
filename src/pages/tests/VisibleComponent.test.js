import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../components/Registration';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';
import VisibleComponent from '../VisibleComponent';


describe("VisibleComponent", () => {
    describe("rendering of VisibleComponent", () => {
        it('renders without crashing VisibleComponent', () => {
            const div = document.createElement('div');
            //const value = 'greetings';
            //const pair = 'salutations';
            ReactDOM.render(
                <VisibleComponent />, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })
    })
});