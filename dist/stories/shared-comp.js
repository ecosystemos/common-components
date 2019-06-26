import React from 'react';
import { storiesOf } from '@storybook/react';
import SharedComp from '../components/SharedComp';
storiesOf('SharedComp', module).add('shared-component', function () {
  return React.createElement(SharedComp, null);
});