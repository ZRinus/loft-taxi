import React from "react";

class LogOut extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.parentMethod();
  }

  clickReg = () => {
    this.props.parentMethod2();
  }

  render() {
    if (this.props.showPlease != false) {
      return (
        <div>
          <div style={{ display: 'inline-block' }} className="letsCenter">
            <form onSubmit={this.handleSubmit} style={{ width: "370px", textAlign: "left" }}>
              <label>
                Имя:
                <input name="firstName" type="text" />
              </label>
              <br />
              <label>
                Фамилия:
                <input name="lastName" type="text" />
              </label>
              <br />
              <input type="submit" value="Войти" onClick={this.click} />
            </form>
            <button onClick={this.clickReg} style={{ textAlign: "left" }}>
              Регистрация
          </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default LogOut;