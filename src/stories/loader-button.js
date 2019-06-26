import React from 'react';
import { storiesOf } from '@storybook/react';
import LoaderButton from '../components/LoaderButton';
//import {theme} from "../themes";
// Theme
import theme from '../themes';
import overRideTheme from '../themes/overrides/CircularProgress';
import {ThemeProvider} from '@material-ui/styles';
const loaderButtonTheme={
    ...theme,
    overrides: {
        ...overRideTheme
    }
}

storiesOf('LoaderButton', module)
    .add('loader-button', () => <LoaderButton color="primary" loading={false} variant="contained">Loading</LoaderButton>)
    .add('loading-button', () => <ThemeProvider theme={loaderButtonTheme}><LoaderButton color="primary" loading={true} variant="contained" >Loading</LoaderButton></ThemeProvider>)


