import React from 'react';
import renderer from 'react-test-renderer';

import SplitModal, { Props } from './SplitModal';

describe('Button', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      open: false,
      onClose: () => {},
      onBackdrop: () => {},
      left: <div>Left</div>,
      right: <div>Right</div>,
    };
  });

  it('renders closed', () => {
    const component = renderer.create(
      <SplitModal { ...props }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders open', () => {
    props.open = true;
    
    const component = renderer.create(
      <SplitModal { ...props }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
