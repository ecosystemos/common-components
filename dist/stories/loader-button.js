import _objectSpread from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { storiesOf } from '@storybook/react';
import LoaderButton from '../components/LoaderButton'; //import {theme} from "../themes";
// Theme

import theme from '../themes';
import overRideTheme from '../themes/overrides/CircularProgress';
import { ThemeProvider } from '@material-ui/styles';

var loaderButtonTheme = _objectSpread({}, theme, {
  overrides: _objectSpread({}, overRideTheme)
});

storiesOf('LoaderButton', module).add('loader-button', function () {
  return React.createElement(LoaderButton, {
    color: "primary",
    loading: false,
    variant: "contained"
  }, "Loading");
}).add('loading-button', function () {
  return React.createElement(ThemeProvider, {
    theme: loaderButtonTheme
  }, React.createElement(LoaderButton, {
    color: "primary",
    loading: true,
    variant: "contained"
  }, "Loading"));
});