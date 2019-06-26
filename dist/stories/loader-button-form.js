import React from 'react';
import { storiesOf } from '@storybook/react';
import LoaderButtonForm from '../containers/TestLoaderButton';
storiesOf('LoaderButtonForm', module).add('loader-button-form', function () {
  return React.createElement(LoaderButtonForm, null);
});