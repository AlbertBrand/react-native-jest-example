/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('react-native-vector-icons/FontAwesome', () => {
  const mockComponent = require('mockComponent').default;
  const Icon = mockComponent('Icon');
  Icon.Button = mockComponent('Icon.Button');
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
