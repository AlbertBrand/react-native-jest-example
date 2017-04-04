/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('react-native-vector-icons/FontAwesome', () => {
  const React = require('react');
  const Icon = props => React.createElement('Icon', props, props.children);
  Icon.Button = 'Icon.Button';
  return Icon;
});

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />
    );
    expect(tree).toMatchSnapshot()
  });
})
