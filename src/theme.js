import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export default createMuiTheme({
    spacing: 8,
    palette: {
        primary: purple,
        secondary: green,
    },
    overrides: {
        button: {
            padding: '30px',
        },
    }

});