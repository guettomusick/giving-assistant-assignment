import React from 'react';
import renderer from 'react-test-renderer';

import CouponPane, { Props } from './CouponPane';

describe('CouponPane', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      cmsData: {
        id: 'id',
        title: 'Coupon',
        description: 'A Coupon',
        code: 'CODE',
        active: true,
        cta: {
          title: 'Coupon',
        }
      }
    }
  })
  
  it('renders', () => {
    const component = renderer.create(
      <CouponPane { ...props } />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
