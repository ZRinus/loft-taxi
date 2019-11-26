import React from "react";
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import PropTypes from "prop-types";
import { AuthContext } from '../../providers/AuthContext'



class LogOut extends React.Component {

  static contextType = AuthContext;

  static propTypes = {
    showPlease: PropTypes.bool
  }

  handleSubmit = event => {
    event.preventDefault();
    this.context.login();
    this.props.actionForMap();
  }

  clickReg = () => {
    // event.preventDefault();
    this.props.actionForRegistration();
  }

  render() {
    if (this.props.showPlease != false) {
      return (
        <div>
          <div style={{ display: 'inline-block' }} className="letsCenter">
            <form onSubmit={this.handleSubmit} style={{ width: "370px", textAlign: "left" }}>

              <Input name="firstName" data-testid="firstName" type="text" placeholder="Имя" />

              <br />

              <Input name="lastName" data-testid="lastName" type="text" placeholder="Фамилия" />


              <br />


              <Button data-testid="checklogin" type="submit"
                variant="contained" color="primary" className="login_button">
                Войти
              </Button>
            </form>
            <Button data-testid="registration" onClick={this.clickReg} style={{ textAlign: "left" }}
              className="registration_button">
              Регистрация
          </Button>
          </div>
        </div >
      );
    } else {
      return null;
    }
  }
}

export default LogOut;