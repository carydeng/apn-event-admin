import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const ThemeProvider = ({children}) => (
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;