import React from 'react';
import renderer from 'react-test-renderer';

import Modal, { Props } from './Modal';

describe('Modal', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      open: false,
      onClose: () => {},
      onBackdrop: () => {},
    };
  });

  it('renders closed', () => {
    const component = renderer.create(
      <Modal { ...props }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders open', () => {
    props.open = true;

    const component = renderer.create(
      <Modal { ...props }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
