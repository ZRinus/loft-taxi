import React from 'react';
import ReactDOM from 'react-dom';
import LogOut from '../components/LogOut';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';

describe("LogOut", () => {
  describe("rendering of LogOut", () => {
    it('renders without crashing LogOut', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <LogOut />, div
      );
      ReactDOM.unmountComponentAtNode(div);

    });


    it('Login button', () => {
      const onClick = jest.fn();

      let mockFn = jest.fn();

      const { getByLabelText, getByText, getByTestId, container } = render(
        <AuthProvider>
          <LogOut  actionForMap = {mockFn} actionForRegistration = {mockFn}/>
        </AuthProvider>
      );
 
      fireEvent.click(getByTestId(/checklogin/i));

      expect(mockFn).toHaveBeenCalledTimes(1);     
  });
})
});


//mport '@testing-library/jest-dom/extend-expect'

/*it('renders without crashing LogOut', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogOut />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

/*it('Login button', () => {
    const firstName = 'me';
    const lastName = 'please';
    const onClick = jest.fn();

    let mockFn = jest.fn();

    const { getByLabelText, getByText, getByTestId } = render(
      <LogOut  parentMethod = {mockFn} clickReg = {mockFn}/>
    );
  
    fireEvent.change(getByTestId(/firstName/i), firstName)// {
  
    fireEvent.change(getByTestId(/lastName/i), lastName)//, {
  
    fireEvent.click(getByTestId(/checklogin/i));

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({
        firstName,
        lastName
    });
  });*/


  /*it('Reg button', () => {

    const TestUtils = require('react-dom/test-utils')

    const div = document.createElement('div');
    //const value = 'greetings';
    //const pair = 'salutations';
    ReactDOM.render(
      <AuthProvider>
        <App />
      </AuthProvider>, div
    );

    

    const onClick = jest.fn();

    let mockFn = jest.fn();
    //this.props.parentMethod = mockFn;

    const { getByLabelText, getByText, getByTestId } = render(
      <LogOut  parentMethod = {mockFn} clickReg = {mockFn} parentMethod2 = {mockFn}/>
    );
  
    let hello = TestUtils.renderIntoDocument(<AuthProvider>
        <App />
      </AuthProvider>)
    
  
    fireEvent.click(getByTestId(/registration/i));
  
      var allDivs = TestUtils.findRenderedDOMComponentWithClass(
        hello,
        'Registration'
      );

  });*/