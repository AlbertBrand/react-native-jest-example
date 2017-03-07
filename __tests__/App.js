/* @flow */
import React, { default as mockReact } from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('react-native-vector-icons/FontAwesome', () => {
  class Icon extends mockReact.Component {
    render() {
      const { children, ...props } = this.props;
      return mockReact.createElement('Icon', props, children);
    }
  }
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
