/* @flow */
import mockComponent from 'mockComponent';

const Icon = mockComponent('Icon');
Icon.Button = mockComponent('Icon.Button');

export default Icon;

export const Button = Icon.Button;
