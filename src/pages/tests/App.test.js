import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { toBeInTheDocument, toHaveClass, toHaveTextContent } from '@testing-library/jest-dom'
expect.extend({ toBeInTheDocument, toHaveClass, toHaveTextContent })




describe("App", () => {

  describe("rendering of app", () => {
    it('renders without crashing App', () => {
      const div = document.createElement('div');
      ReactDOM.render(
          <App />, div
      );

    })


  /*describe("rendering of app", () => {
    it('renders without crashing App', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <AuthProvider>
          <App />
        </AuthProvider>, div
      );

    })

    it('renders without crashing App', () => {
      const { getByText, getByTestId, container } = render(
        <AuthProvider><App /></AuthProvider>
      );

      const loginbutton = getByTestId("enter");

      expect(loginbutton).toBeInTheDocument();

      fireEvent.click(loginbutton);

      const checklogin = getByTestId("checklogin");

      expect(checklogin).toBeInTheDocument();

      fireEvent.click(checklogin);

      const mymap = getByTestId("mymap");

      expect(mymap).toBeInTheDocument();
    })*/
  })
});