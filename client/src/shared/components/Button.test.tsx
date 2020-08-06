import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

test('renders', () => {
  const component = renderer.create(
    <Button onClick={ () => {} }>Button</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
