import React from "react";
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import PropTypes from "prop-types";
import { AuthContext } from '.././providers/AuthContext'
import MyMap from './components/MyMap';
import PrivateZone from './components/PrivateZone';
import LogOut from './components/LogOut';
import Registration from './components/Registration';




class VisibleComponent extends React.Component {

  static contextType = AuthContext;

  static propTypes = {
    showMap: PropTypes.bool,
    showLogOut: PropTypes.bool,
    showPrivateZone: PropTypes.bool,
    actionForMap: PropTypes.func,
    actionForRegistration: PropTypes.func
  }


  render() {
    if (this.props.showMap == true) {
      return (
        <MyMap showPlease={true} isAuthInSite={true} />
      );
    }

    else if (this.props.showPrivateZone == true) {
      return (
        <PrivateZone showPlease={true} isAuthInSite={true} />
      );
    }

    else if (this.props.showLogOut == true) {
      return (
        <LogOut showPlease={true} actionForMap={this.props.actionForMap}
          actionForRegistration={this.props.actionForRegistration} />
      );
    }

    else if (this.props.showRegistration == true) {
      return (
        <Registration showPlease={true} actionForMap={this.props.actionForMap} />
      );
    }
    else {
      return null;
    }
  }
}

export default VisibleComponent;