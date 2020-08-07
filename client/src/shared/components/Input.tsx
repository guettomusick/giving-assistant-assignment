import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import { ChangeEvent } from '../hooks/useHandleChange';

type InputContainerProps = {
  hasTextMuted: boolean,
};

const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;

  ${ props => (props.hasTextMuted && `
    padding-bottom: 20px;
  `)};
`;

type StyledInputProps = {
  hasButton: boolean,
};

const StyledInput = styled.input<StyledInputProps>`
  height: 38px;
  border-radius: 6px;
  border 1px solid #666;
  border-shadows: none;
  background: white;
  padding: 8px 14px;
  font-size: 1rem;
  flex-grow: 1;

  ${ props => (props.hasButton && `
    border-radius: 6px 0 0 6px;
    border-right: none;
  `)};
`;

const StyledButton = styled(Button)`
  border-radius: 0 6px 6px 0;
`;

const TextMuted = styled.div`
  position: absolute;
  top: 42px;
  font-size: 0.65em;
  /* text-overflow: revert; */
  color: red;
  width: 100%;
  text-align: center;
`;

export type Props = {
  name: string,
  value: string,
  onChange?: (event: ChangeEvent) => any,
  onClick?: () => any,
  cta?: string,
  textMuted?: string,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
  inputRef?: any,
};

const Input: FC<Props> = ({
  name,
  value,
  onChange,
  onClick,
  cta,
  textMuted,
  placeholder,
  disabled,
  className,
  inputRef,
}) => {
  const [dirty, setDirty] = useState<boolean>(value.length > 0);
  const hasButton = onClick !== undefined && cta !== undefined;
  const hasTextMuted = !!textMuted;

  const handleChange = (event: ChangeEvent) => {
    setDirty(true);
    onChange && onChange(event);
  };

  return (
    <InputContainer className={ className } hasTextMuted={ hasTextMuted }>
      <StyledInput
        name={ name }
        hasButton={ hasButton }
        value={ value }
        onChange={ handleChange }
        placeholder={ placeholder }
        disabled={ disabled }
        ref={ inputRef }
      />
      { hasButton && <StyledButton onClick={ onClick }>{ cta }</StyledButton> }
      { dirty && textMuted && <TextMuted>{ textMuted }</TextMuted> }
    </InputContainer>
  );
};

export default Input;