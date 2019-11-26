import React from "react";
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../providers/actions/authActions';
import { clearErrors } from '../../providers/actions/errorActions';



class LoginComponent extends React.Component {

  state = {
    modal: false,
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    console.log(1111111111111)
    // Attempt to login
  await  this.props.login(user).then(()=>{
    const { error, isAuthenticated } = this.props;

    if (isAuthenticated) {
      this.props.history.push('/mymap');
    }
    else {
      if (window.confirm('Ошибка аутентификации')) {
        this.setState({
          email: '',
          password: ''
        })
      };
    }

  });
  console.log(222222222222)
  console.log(this.props)
   
   /*const qwe1 = qwe.then(res => {
      const { error, isAuthenticated } = this.props;

      if (isAuthenticated) {
        this.props.history.push('/mymap');
      }
      else {
        if (window.confirm('Ошибка аутентификации')) {
          this.setState({
            email: '',
            password: ''
          })
        };
      }
    });*/
    
  }

  clickReg = () => {
    // event.preventDefault();
    this.props.history.push('/registration');
  }

  render() {
    return (
      <div>
        <div style={{ display: 'inline-block' }} className="letsCenter">
          <form onSubmit={this.handleSubmit} style={{ width: "370px", textAlign: "left" }}>

            <Input name="email" data-testid="login_value" type="text" placeholder="Логин" onChange={this.onChange}
              value={this.state.email} />

            <br />

            <Input name="password" data-testid="password_value" type="text" placeholder="Пароль" onChange={this.onChange}
              value={this.state.password} />

            <br />

            <Button data-testid="checklogin" type="submit"
              variant="contained" color="primary" className="login_button">
              Войти
              </Button>
          </form>
          <Button data-testid="registration" onClick={this.clickReg} style={{ textAlign: "left" }} className="registration_button">
            Регистрация
          </Button>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginComponent);

//export default LogOut;