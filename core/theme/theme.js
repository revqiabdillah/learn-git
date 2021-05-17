import { red, blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: blue.A100,
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#ffffff',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1920,
        },
    },
    overrides: {
        MuiButton: {
            root: {
               borderRadius: 50,
            },
        }
    }
});

export default theme;
