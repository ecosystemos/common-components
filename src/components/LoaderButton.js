import React from "react";
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export default (props) => {
    const {
        children,
        loading,
        variant,
        ...rest
    } = props;

    return (
        <Button variant={variant} {...rest}>
            {loading &&  <CircularProgress {...rest} size={20}/>}
            {children}
        </Button>
    )

}

