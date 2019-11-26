import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link, Redirect
} from "react-router-dom";



function PrivateZone(props) {

  return <div>Личный кабинет</div>

}

export default PrivateZone;