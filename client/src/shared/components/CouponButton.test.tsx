import React from 'react';
import renderer from 'react-test-renderer';

import CouponButton from './CouponButton';

describe('Button', () => {
  it('renders', () => {
    const component = renderer.create(
      <CouponButton title='Button' onClick={ () => {} }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
