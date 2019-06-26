import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



class PasswordAdornments extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showPassword: false,
            error: false,
            passwordQuality: 0,

        };
    }
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    render() {
        const {className,id,label,helper,...rest} = this.props;

        return (<FormControl aria-describedby="password-helper-text">
            <InputLabel htmlFor="adornment-password">{label}</InputLabel>
            <Input
                className={className}
                required
                margin={"dense"}
                id={id}
                type={this.state.showPassword ? 'text' : 'password'}
                {...rest}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                        >
                            {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText id="password-helper-text">{helper}</FormHelperText>
        </FormControl>);

    }
}

export default (PasswordAdornments);
