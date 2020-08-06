import React from 'react';
import renderer from 'react-test-renderer';

import Input, { Props } from './Input';

describe('Input', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      name: 'Some Input',
      onChange: () => {},
      value: 'Some Valu',
    }
  });

  it('renders without button', () => {
    const component = renderer.create(
      <Input { ...props }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with button', () => {
    props.onClick = () => {};
    props.cta = 'CTA';

    const component = renderer.create(
      <Input { ...props }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
