import React, { Component } from 'react';
import LoaderButton from './components/LoaderButton';

// Theme
import theme from './themes';
import overRideTheme from './themes/overrides/CircularProgress';
import {ThemeProvider} from '@material-ui/styles';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            disabled:false
        }

    }
    handleClick = async event => {
        event.preventDefault();
        if (this.state.loading) return;
        this.setState({loading: true, disabled: true});

    }
    render() {
        //console.log('THEME',theme);
        const loaderButtonTheme={
            ...theme,
            overrides: {
                ...overRideTheme
            }
        }
        return (
            <ThemeProvider theme={loaderButtonTheme}>
                <LoaderButton  onClick={this.handleClick} color="primary" loading={this.state.loading} variant="contained">Loading</LoaderButton>
            </ThemeProvider>
        );
    }
}
