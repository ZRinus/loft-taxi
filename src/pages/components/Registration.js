import React from "react";
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { register } from '../../providers/actions/authActions';
import { clearErrors } from '../../providers/actions/errorActions';

class Registration extends React.Component {

  state = {
    modal: false,
    email: '',
    password: '',
    name: '',
    surname: '',
    msg: null
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password, name, surname } = this.state;

    const user = {
      email,
      password,
      name,
      surname
    };

    await this.props.register(user);
    const { error, isAuthenticated } = this.props;
    console.log('isAuthenticated')
    console.log(isAuthenticated)
    if (isAuthenticated) {
      this.props.history.push('/mymap');
    }
    else {
      if (window.confirm('Ошибка регистрации')) {

        this.setState({
          email: '',
          password: '',
          name: '',
          surname: ''
        })
      };
    }
  }

  render() {
    return (
      <div>
        <div style={{ display: 'inline-block' }} className="letsCenter">
          А вот это уже регистрация
              <form onSubmit={this.handleSubmit} style={{ width: "370px", textAlign: "left" }}>
            <Input name="name" type="text" placeholder="Имя" onChange={this.onChange}
              value={this.state.name} >
            </Input>
            <br />
            <Input name="surname" type="text" placeholder="Фамилия" onChange={this.onChange}
              value={this.state.surname} >
            </Input>
            <br />
            <Input name="email" type="text" placeholder="Логин" onChange={this.onChange}
              value={this.state.email} >
            </Input>
            <br />
            <Input name="password" type="text" placeholder="Пароль" onChange={this.onChange}
              value={this.state.password} ></Input>
            <br />
            <Button type="submit" className="registration_button"> Войти</Button>
          </form>
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
  { register, clearErrors }
)(Registration);

//export default Registration;