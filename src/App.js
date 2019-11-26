import React from 'react';
import './App.css';
import MyMap from './pages/components/MyMap';
import VisibleComponent from './pages/VisibleComponent';
import PrivateZone from './pages/components/PrivateZone';
import LogOutComponent from './pages/components/LogOut';
import Registration from './pages/components/Registration';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from 'loft-taxi-mui-theme';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './providers/AuthContext';
import { AuthConsumer } from './providers/AuthContext'
import { AuthContext } from './providers/AuthContext';
import Header from './header/Header'

const root = {
  flexGrow: 1,
}
const menuButton = {
  spacing: 2
}
const title = {
  flexGrow: 1,
}

class App extends React.Component {

  //static contextType = AuthContext;
  static contextType = AuthContext


  constructor(props) {
    super(props);
    this.state = { showMap: false, showLogOut: true, showPrivateZone: false, showRegistration: false };
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
    //this.context.isAuth = false;
    this.context.logout();
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
      <ThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Header actionForMap={this.handleToggleClickMyMapShow}
              actionForPrivateZone={this.handleToggleClickMyPrivateZoneShow}
              actionForLogOut={this.handleToggleClickMyLogOutShow} />
          </AppBar>

          <VisibleComponent showMap={this.state.showMap}
            showLogOut={this.state.showLogOut}
            showPrivateZone={this.state.showPrivateZone}
            showRegistration={this.state.showRegistration}
            actionForMap={this.handleToggleClickMyMapShow}
            actionForRegistration={this.handleToggleClickMyRegistrationFormShow} />
        </div>

      </ThemeProvider>

    );
  }
}

export default App;





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

