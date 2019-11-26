import React from 'react';
import ReactDOM from 'react-dom';
import LogOutComponent from '../components/LogOutComponent';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';
import { renderWithRedux } from './renderWithRedux'
import { createMemoryHistory } from 'history'
import { EXPECTED_COLOR } from 'jest-matcher-utils';
import { createStore } from 'redux'

describe("LogOut", () => {
  describe("rendering of LogOut", () => {
    it('renders without crashing LogOut', () => {

      const { } = renderWithRedux(<LogOutComponent />)

    });

    it('Logout button', () => {

      let mockFn = jest.fn();

      const history = createMemoryHistory()

      const { getByTestId  } = renderWithRedux(<LogOutComponent history={history} />)

      const historyLenght = history.length
 
      fireEvent.click(getByTestId(/checklogout/i));

      expect(history.length).toBe(historyLenght + 1);    
  });


   /* it('Login button', () => {
      const onClick = jest.fn();

      let mockFn = jest.fn();

      const { getByLabelText, getByText, getByTestId, container } = render(
        <AuthProvider>
          <LogOut  actionForMap = {mockFn} actionForRegistration = {mockFn}/>
        </AuthProvider>
      );
 
      fireEvent.click(getByTestId(/checklogout/i));

      expect(mockFn).toHaveBeenCalledTimes(1);     
  });*/
})
});