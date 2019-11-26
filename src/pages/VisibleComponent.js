import React from "react";
import MyMap from './components/MyMap';
import PrivateZone from './components/PrivateZone';
import LoginComponent from './components/LoginComponent';
import LogOutComponent from './components/LogOutComponent';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link, Redirect
} from "react-router-dom";

class VisibleComponent extends React.Component {

  render() {
    return (
      <Switch>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/mymap" component={MyMap} />
        <Route path="/privatezone" render={() => (<PrivateZone />)} exact />
        <Route path="/login" component={LoginComponent} exact />
        <Route path="/logout" component={LogOutComponent} exact />
        <Route path="/registration" component={Registration} exact />
      </Switch>
    );

  }
}

export default VisibleComponent;