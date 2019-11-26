import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from '../../providers/AuthContext';


describe("AuthContext", () => {
    describe("rendering of AuthContext", () => {
        it('renders without crashing AuthContext', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <AuthProvider />, div
            );
            ReactDOM.unmountComponentAtNode(div);

        })

        it('AuthContext: change isAuth when login', () => {
            const div = document.createElement('div');
            let app = ReactDOM.render(<AuthProvider />, div); // <-- App component mounted here
            const isAuthCurrent = app.state.isAuth;
            expect(app.state.isAuth).toEqual(false);
            app.login();
            expect(app.state.isAuth).toEqual(true);
            app.logout();
            expect(app.state.isAuth).toEqual(false);
            ReactDOM.unmountComponentAtNode(div);
        })
    })
});


