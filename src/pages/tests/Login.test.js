import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from '../components/LoginComponent';
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

      const { } = renderWithRedux(<LoginComponent />)

    });

    it('renders without crashing LogOut', () => {
  
        const { getByTestId  } = renderWithRedux(<LoginComponent />)

        const inputLogin = getByTestId(/login_value/i);

        


        inputLogin.value = "email@example.com"
        fireEvent.change(inputLogin)
        expect(inputLogin.value).toBe('email@example.com') 

        const passwordLogin = getByTestId(/password_value/i);

        passwordLogin.value = "password"
        fireEvent.change(passwordLogin)
        expect(passwordLogin.value).toBe('password')

        //fireEvent.click(getByTestId('checklogin'));
  
      });


        it('renders without crashing LogOut', () => {
          let mockFn = jest.fn();
          const  container  = renderWithRedux(<LoginComponent login = {mockFn}/>)
            console.log(container.store.getState())
    
            const inputLogin = container.getByTestId(/login_value/i);
  
           
    
            
    
    
            inputLogin.value = "email@example.com"
            fireEvent.change(inputLogin)
            expect(inputLogin.value).toBe('email@example.com') 
    
            const passwordLogin = container.getByTestId(/password_value/i);
    
            passwordLogin.value = "password"
            fireEvent.change(passwordLogin)
            expect(passwordLogin.value).toBe('password')
    
            fireEvent.click(container.getByTestId('checklogin'));

            expect(mockFn).not.toHaveBeenCalled();

            console.log(container.store.getState())
            console.log(container.email)


    
            
           
    
            
    
          //  fireEvent.change(inputLogin, { target: { value: "New value" } });
      //	expect(inputLogin.value).toBe("New value");
      
          });

    /*it('Logout button', () => {

      let mockFn = jest.fn();

      const history = createMemoryHistory()

      const { getByTestId  } = renderWithRedux(<LogOutComponent history={history} />)

      const historyLenght = history.length
 
      fireEvent.click(getByTestId(/checklogout/i));

      expect(history.length).toBe(historyLenght + 1);    
  });*/
})
});