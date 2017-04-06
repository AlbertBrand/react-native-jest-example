/*
  @flow
  @providesModule mockComponent
*/
import React from 'react';

export default function mockComponent(name: string): Function {
  return (props: Object) => React.createElement(name, props, props.children);
}
