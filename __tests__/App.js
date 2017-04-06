/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('react-native-vector-icons/FontAwesome', () => {
  const mockComponent = require('mockComponent').default;
  const module = jest.genMockFromModule('react-native-vector-icons/FontAwesome');
  const Icon = mockComponent('Icon');
  Icon.Button = mockComponent('Icon.Button');
  module.default = Icon;
  module.Button = Icon.Button;
  return module;
});

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />
    );
    expect(tree).toMatchSnapshot()
  });
})
