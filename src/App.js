import React from 'react';
import './App.css';
import MyMap from './Components/MyMap';
import PrivateZone from './Components/PrivateZone';
import LogOutComponent from './Components/LogOut';
import Registration from './Components/Registration';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMap: true, showLogOut: false, showPrivateZone: false, showRegistration: false };
    this.handleToggleClickMyMapShow = this.handleToggleClickMyMapShow.bind(this);
    this.handleToggleClickMyPrivateZoneShow = this.handleToggleClickMyPrivateZoneShow.bind(this);
    this.handleToggleClickMyLogOutShow = this.handleToggleClickMyLogOutShow.bind(this);
    this.handleToggleClickMyRegistrationFormShow = this.handleToggleClickMyRegistrationFormShow.bind(this);
  }

  handleToggleClickMyMapShow() {
    this.setState(state => ({
      showMap: true, showLogOut: false, showPrivateZone: false, showRegistration: false
    }));
  }

  handleToggleClickMyLogOutShow() {
    this.setState(state => ({
      showMap: false, showLogOut: true, showPrivateZone: false, showRegistration: false
    }));
  }

  handleToggleClickMyPrivateZoneShow() {
    this.setState(state => ({
      showMap: false, showLogOut: false, showPrivateZone: true, showRegistration: false
    }));
  }

  handleToggleClickMyRegistrationFormShow() {
    this.setState(state => ({
      showMap: false, showLogOut: false, showPrivateZone: false, showRegistration: true
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="header_div">
          <ul>
            <li className="li_point" onClick={this.handleToggleClickMyMapShow}>
              Моя карта
            </li>
            <li className="li_point" onClick={this.handleToggleClickMyPrivateZoneShow}>
              Мой профиль
            </li>
            <li className="li_point" onClick={this.handleToggleClickMyLogOutShow}>
              Выйти
            </li>
          </ul>
        </div>
        <div>
          <MyMap showPlease={this.state.showMap} />
          <PrivateZone showPlease={this.state.showPrivateZone} />
          <LogOutComponent showPlease={this.state.showLogOut} parentMethod={this.handleToggleClickMyMapShow} parentMethod2={this.handleToggleClickMyRegistrationFormShow} />
          <Registration showPlease={this.state.showRegistration} parentMethod={this.handleToggleClickMyMapShow} />

        </div>
      </div>

    );
  }
}

export default App;
