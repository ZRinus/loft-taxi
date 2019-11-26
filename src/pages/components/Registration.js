import React from "react";
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import PropTypes from "prop-types";
import { AuthContext } from '../../providers/AuthContext'

class Registration extends React.Component {

  static contextType = AuthContext


  static propTypes = {
    showPlease: PropTypes.bool
  }

  handleSubmit = event => {
    event.preventDefault();
    //this.context.isAuth = true;
    this.context.login();
    this.props.actionForMap();
  }

  render() {
    if (this.props.showPlease !== false) {
      return (
        <div>
          <div style={{ display: 'inline-block' }} className="letsCenter">
            А вот это уже регистрация
            <form onSubmit={this.handleSubmit} style={{ width: "370px", textAlign: "left" }}>
              <Input name="firstName" type="text" placeholder="Имя">
              </Input>
              <br />
              <Input name="lastName" type="text" placeholder="Фамилия"></Input>
              <br />
              <Button type="submit" onClick={this.click} className="registration_button"> Войти</Button>
            </form>
          </div>
        </div >
      );
    } else {
      return null;
    }
  }
}

export default Registration;