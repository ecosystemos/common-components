import _objectWithoutProperties from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
export default (function (props) {
  var children = props.children,
      loading = props.loading,
      variant = props.variant,
      rest = _objectWithoutProperties(props, ["children", "loading", "variant"]);

  return React.createElement(Button, Object.assign({
    variant: variant
  }, rest), loading && React.createElement(CircularProgress, Object.assign({}, rest, {
    size: 20
  })), children);
});