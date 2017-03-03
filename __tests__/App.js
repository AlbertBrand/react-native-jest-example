/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />
    );
    expect(tree).toMatchSnapshot()
  });
})
