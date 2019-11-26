import React from "react";

class Registration extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.parentMethod();
  }

  render() {
    if (this.props.showPlease !== false) {
      return (
        <div>
          <div style={{ display: 'inline-block' }} className="letsCenter">
            А вот это уже регистрация
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
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Registration;