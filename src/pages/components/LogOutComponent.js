import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../providers/actions/authActions';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';


export class LogOutComponent extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  handleOnClick = (props) => {
    this.props.logout()
    //console.log(props)
    this.props.history.push('/');
  }



  render() {
    return (
      <div>
        <Button color="primary" variant="contained" onClick={this.handleOnClick}  data-testid="checklogout">
          Разлогиниться
      </Button>
      </div >
    );
  }
}

export default connect(
  null,
  { logout }
)(LogOutComponent);