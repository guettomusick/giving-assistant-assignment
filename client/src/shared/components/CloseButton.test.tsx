import React from 'react';
import renderer from 'react-test-renderer';

import CloseButton from './CloseButton';

describe('Button', () => {
  it('renders', () => {
    const component = renderer.create(
      <CloseButton onClick={ () => {} }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
