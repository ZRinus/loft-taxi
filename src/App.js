import React from 'react';
import './App.css';
import VisibleComponent from './pages/VisibleComponent';
import AppBar from '@material-ui/core/AppBar';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './header/Header'
import store from './providers/store';
import { loadUser } from './providers/actions/authActions';

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

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Header />
          </AppBar>

          <VisibleComponent  />
        </div>

      </ThemeProvider>

    );
  }
}

export default App;

