import React from 'react'
//import {connect} from 'react-redux';
//import { login_my_user } from './actions'


const AuthContext = React.createContext()

class AuthProvider extends React.Component {

   // const { login_my_user } = this.props;

/*componentDidMount(){
    const { login_my_user } = this.props;
    login_my_user();
}*/

    constructor() {
        super()
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
        this.logout = this.logout.bind(this)
        this.login_set = this.login_set.bind(this)
        this.state = { isAuth: false }
    }

    login = async (login, password) => {
        return await fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST', body: JSON.stringify({
                email: login,
                password: password
            }), headers: { 'content-type': 'application/json' }
        })
            .then((response) => {
                return response.json();
            })
            .catch(alert);
    }

    register = async (login, password, firstname, lastname) => {
        return await fetch('https://loft-taxi.glitch.me/register', {
            method: 'POST', body: JSON.stringify({
                email: login,
                password: password,
                name: firstname,
                surname: lastname
            }), headers: { 'content-type': 'application/json' }
        })
            .then((response) => {
                return response.json();
            })
            .catch(alert);
    }

    logout() {
        this.setState({ isAuth: false })
    }

    login_set() {
        this.setState({ isAuth: true })
    }

    render() {
        return (
            <AuthContext.Provider
            value={{
                isAuth: this.state.isAuth,
                login: this.login,
                register: this.register,
                logout: this.logout,
                login_set: this.login_set
            }}
            >
                {this.props.children}

            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer

//const mapStateToProps = state => state;

//mapDispatchToProps = { login_my_user }

//export default connect (mapStateToProps, mapDispatchToProps)(AuthProvider);

export { AuthProvider, AuthConsumer, AuthContext }
