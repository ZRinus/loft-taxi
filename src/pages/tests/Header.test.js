import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../components/Registration';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../App';
import { AuthProvider } from '../../providers/AuthContext';
import { AuthContext } from '../../providers/AuthContext';
import Header from '../../header/Header';
import { toBeInTheDocument, toHaveClass, toHaveTextContent } from '@testing-library/jest-dom'
expect.extend({ toBeInTheDocument, toHaveClass, toHaveTextContent })



describe("Header", () => {
    describe("rendering of Header", () => {
        it('renders without crashing Header', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <AuthProvider><Header /></AuthProvider>, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })

        it('renders without crashing Header', () => {
            const { getByText } = render(
                <AuthProvider isAuth={false}><Header /></AuthProvider>
            );


            expect(getByText("Войти")).toBeInTheDocument();
        });
    })
});

        /*  it('renders without crashing Header', () => {
  
  
              const { getByText, container } = render(
                  <AuthProvider isAuth={() => { this.setState({ isAuth: true }) }}><Header /></AuthProvider>
              );
  
              expect(getByText("Выйти")).toBeInTheDocument();
  
              /*const div = document.createElement('div');
              const login = jest.fn();
              let app = ReactDOM.render(
                  <AuthProvider login={login}><Header /></AuthProvider>,
                  div); // <-- App component mounted here
              // const isAuthCurrent = app.state.isAuth;
              // let app = ReactDOM.render(
              //    <Header />,
              //    div)
              console.log(app)
              const button = document.getElementsByTagName("button").item(0)
              // expect(app.state.isAuth).toEqual(false);
              expect(button.toBeInTheDocument());*/
        /*  app.
          app.login();
          expect(app.state.isAuth).toEqual(true);
          app.logout();
          expect(app.state.isAuth).toEqual(false);
          ReactDOM.unmountComponentAtNode(div);*/
        /*const login = jest.fn();

        const { getByText, container } = render(
            <AuthProvider login={login}><Header /></AuthProvider>
        );

        expect(getByText("Войти")).toBeInTheDocument();*/


        /* it('renders without crashing Header', () => {
             const div = document.createElement('div');
 
             let app = ReactDOM.render(
                 <AuthProvider><Header /></AuthProvider>, div
             );
         });*/
        /*const div = document.createElement('div');

        let app = ReactDOM.render(
            <AuthProvider><Header /></AuthProvider>, div
        );

        //let buttonLogIn = document.querySelector('.loginbutton');
        const buttonLogIn = document.querySelector('[data-testid="ok-button"]')
        console.log(buttonLogIn)
        //const button = app.getByTestId("ok-button");



        //if (app.context)
        //   expect(button).toBeInTheDocument()
        // expect(app).toBeInTheDocument(buttonLogIn);

        // const { getByText, getByTestId, container } = render(<AuthProvider><Header /></AuthProvider>);
        // const elem = getByTestId("ok-button");
        //const qwe = container.AuthContext.isAuth;

        ReactDOM.unmountComponentAtNode(div);*/