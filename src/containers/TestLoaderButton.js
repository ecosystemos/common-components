import React from 'react';
import LoaderButton from '../components/LoaderButton';
// Theme
import theme from '../themes';
import overRideTheme from '../themes/overrides/CircularProgress';
import {ThemeProvider} from '@material-ui/styles';


class FormDialog extends React.Component {

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
        const loaderButtonTheme={
            ...theme,
            overrides: {
                ...overRideTheme
            }
        }
        return (
            <div><ThemeProvider theme={loaderButtonTheme}>
                <LoaderButton  disabled={this.state.disabled} onClick={this.handleClick} color="primary" loading={this.state.loading} variant="contained">Loading</LoaderButton>
            </ThemeProvider>
            </div>
        );
    }
}


export default (FormDialog);

//export default withTheme(theme)(FormDialog);

