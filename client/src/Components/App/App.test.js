import renderer from 'react-test-renderer';
import React from 'react';

import App from './App.jsx';

it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});