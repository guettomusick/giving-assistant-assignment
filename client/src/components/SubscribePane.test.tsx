import React from 'react';
import renderer from 'react-test-renderer';

import SubscribePane from './SubscribePane';

describe('SubscribePane', () => {
  it('renders', () => {
    const component = renderer.create(
      <SubscribePane/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
