import React from 'react';
import '../App.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Logo } from 'loft-taxi-mui-theme';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";
import { connect } from 'react-redux';

const menuButton = {
  spacing: 2
}
const title = {
  flexGrow: 1,
}

class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <Toolbar>
        <IconButton edge="start" style={menuButton} color="inherit" aria-label="menu">
          <Logo />
        </IconButton>
        <Typography variant="h6" style={title}>
        </Typography>


        {isAuthenticated ? (
          <>
            <Button component={Link} to="/mymap" color="inherit">
              Моя карта
            </Button>
            <Button component={Link} to="/privatezone" color="inherit">
              Мой профиль
            </Button>
            <Button component={Link} to="/logout" color="inherit" >
              Выйти
            </Button>
          </>
        ) : (
            <Button component={Link} to="/login" color="inherit" >
              Войти
            </Button>
          )}
      </Toolbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Header);

//export default Header;