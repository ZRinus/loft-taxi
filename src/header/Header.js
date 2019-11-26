import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from 'loft-taxi-mui-theme';
import theme from "../theme";
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from '../providers/AuthContext';
import { AuthConsumer } from '../providers/AuthContext'
import { AuthContext } from '../providers/AuthContext'

const menuButton = {
  spacing: 2
}
const title = {
  flexGrow: 1,
}

class Header extends React.Component {

  //static contextType = AuthContext;
  static contextType = AuthContext


  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Toolbar>
        <IconButton edge="start" style={menuButton} color="inherit" aria-label="menu">
          <Logo />
        </IconButton>
        <Typography variant="h6" style={title}>
        </Typography>

        {this.context.isAuth ? (
          <>

            <Button color="inherit" onClick={this.props.actionForMap} >Моя карта</Button>
            <Button color="inherit" onClick={this.props.actionForPrivateZone}>Мой профиль</Button>
            <Button color="inherit" onClick={this.props.actionForLogOut}>Выйти</Button>
          </>
        ) :
          <>
            <Button color="inherit" onClick={this.props.actionForLogOut} data-testid="enter">Войти</Button>
          </>
        }


      </Toolbar>
    );
  }
}

export default Header;





/*render() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" style={menuButton} color="inherit" aria-label="menu">
              <Logo />
            </IconButton>
            <Typography variant="h6" style={title}>
            </Typography>
            <AuthConsumer>
              {({ isAuth, login, logout }) => (
                <>
                  {isAuth ? (
                    <>
                      <Button color="inherit" onClick={this.handleToggleClickMyMapShow}>Моя карта</Button>
                      <Button color="inherit" onClick={this.handleToggleClickMyPrivateZoneShow}>Мой профиль</Button>
                      <Button color="inherit" onClick={this.handleToggleClickMyLogOutShow}>Выйти</Button>
                    </>
                  ) : (
                      <Button color="inherit" onClick={this.handleToggleClickMyLogOutShow} className = 'goInto'>Войти</Button>
                    )}
                </>
              )}
            </AuthConsumer>
          </Toolbar>
        </AppBar>
        <AuthConsumer>
          {({ isAuth, login, logout }) => (
            <>
              <MyMap showPlease={this.state.showMap} isAuthInSite={isAuth} />
              <PrivateZone showPlease={this.state.showPrivateZone} isAuthInSite={isAuth} />
            </>
          )}
        </AuthConsumer>
        <AuthConsumer>
          {({ isAuth, login, logout }) => (
            <>
              <LogOutComponent showPlease={this.state.showLogOut} isAuthInSite={isAuth} parentMethod={this.handleToggleClickMyMapShow}
                parentMethod2={this.handleToggleClickMyRegistrationFormShow} isRegShow={this.state.showRegistration} />
            </>
          )}
        </AuthConsumer>
        <Registration showPlease={this.state.showRegistration} parentMethod={this.handleToggleClickMyMapShow} />
      </div>

    </ThemeProvider>

  );
}*/

