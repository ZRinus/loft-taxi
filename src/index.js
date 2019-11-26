import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './providers/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import  store from './providers/store';
import { Provider } from 'react-redux';

const AppRoot = () => (
    <div>
        <Provider store = {store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
        </Provider>
    </div>
)

/*const AppRoot = () => (
    <div>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </div>
)*/

ReactDOM.render(<AppRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
