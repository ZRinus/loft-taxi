import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';
import { AuthConsumer } from '../../providers/AuthContext'
import { AuthContext } from '../../providers/AuthContext';
import ReactTestUtils from 'react-dom/test-utils';
import LogOut from '../components/LogOut';
import MyMap from '../components/MyMap';
import Registration from '../components/Registration';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { toBeInTheDocument, toHaveClass, toHaveTextContent } from '@testing-library/jest-dom'
expect.extend({ toBeInTheDocument, toHaveClass, toHaveTextContent })




describe("App", () => {
  describe("rendering of app", () => {
    it('renders without crashing App', () => {
      const div = document.createElement('div');
      //const value = 'greetings';
      //const pair = 'salutations';
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

      //console.log(getByText("Войти"))
      const loginbutton = getByTestId("enter");

      expect(loginbutton).toBeInTheDocument();

      fireEvent.click(loginbutton);

      const checklogin = getByTestId("checklogin");

      expect(checklogin).toBeInTheDocument();

      fireEvent.click(checklogin);

      const mymap = getByTestId("mymap");

      expect(mymap).toBeInTheDocument();
    })
  })
});


/* it('renders the correct text', () => {
   const div = document.createElement('div');
   //const value = 'greetings';
   //const pair = 'salutations';
   ReactDOM.render(
     <AuthProvider>
       <App />
     </AuthProvider>, div
   );
 });

 it('find logout element with class', function () {
   const mockCallBack = jest.fn();
   var root = ReactTestUtils.renderIntoDocument(<AuthProvider>
     <App />
   </AuthProvider>);
   var inputElmArr = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, 'MuiButtonBase-root MuiButton-root MuiButton-text goInto MuiButton-colorInherit');
   expect(inputElmArr.length).toEqual(1);
   ReactTestUtils.Simulate.click(inputElmArr[0]);
   ReactTestUtils.findRenderedComponentWithType(root, LogOut);
});

it('find mymap element with class', function () {
 const firstName = 'me';
 const lastName = 'please';
 const onClick = jest.fn();

 var root = ReactTestUtils.renderIntoDocument(<AuthProvider>
   <App />
 </AuthProvider>);
 var inputElmArr = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, 'MuiButtonBase-root MuiButton-root MuiButton-text goInto MuiButton-colorInherit');
 expect(inputElmArr.length).toEqual(1);
 ReactTestUtils.Simulate.click(inputElmArr[0]);
 ReactTestUtils.findRenderedComponentWithType(root, LogOut);

 var input = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, 'input');
 input[0].value = 'text' ;
 input[1].value = 'text' ;

 var button = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, 'login_button');
 expect(button.length).toEqual(1);

 ReactTestUtils.Simulate.click(button[0]);

 var comp = ReactTestUtils.findRenderedComponentWithType(root, MyMap);
   expect(comp).toBeTruthy();




 var inputElmArr1 = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, 'MuiButtonBase-root MuiButton-root MuiButton-text registration_button');
 expect(inputElmArr1.length).toEqual(1);
 ReactTestUtils.Simulate.click(inputElmArr1[0]);
 var comp1 = ReactTestUtils.findRenderedComponentWithType(root, Registration);
 expect(comp1).toBeTruthy();


 var input2 = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, 'input');
 input2[0].value = 'text' ;
 input2[1].value = 'text' ;

 var button2 = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, 'registration_button');
 expect(button2.length).toEqual(1);

 ReactTestUtils.Simulate.click(button2[0]);

 var comp2 = ReactTestUtils.findRenderedComponentWithType(root, MyMap);
   expect(comp2).toBeTruthy();

});*/

/*describe('Test MyComponent', () => {
  it('should be able to click the button', () => {
    const mockFunction = jest.fn();
    const element = ReactTestUtils.renderIntoDocument(
      <AuthProvider>
      <App />
    </AuthProvider>,
    );
    const div = ReactDOM.findDOMNode(element);
    const button = div.getElementsByClassName('goInto')[0];
  //button.simulate('click');
  console.log(button);
   // ReactTestUtils.Simulate.click(button);
  //  expect(mockFunction).toHaveBeenCalled();
  });
});*/


/*it('renders the correct text', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AuthProvider>
      <App />
    </AuthProvider>, div
  );

  const button = div.getElementsByClassName('goInto')[0];
  //button.simulate('click');
  console.log(div);
});*/

