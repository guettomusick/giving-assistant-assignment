import React from 'react';
import renderer from 'react-test-renderer';

import Thumbnail from './Thumbnail';

describe('Thumbnail', () => {
  it('renders', () => {
    const component = renderer.create(
      <Thumbnail src='test.jpg' />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
