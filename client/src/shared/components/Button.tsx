import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  color: white;
  background-color: #18A0FB;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  outline : none;

  ${props => !props.disabled && `
    cursor: pointer;

    &:hover {
      background-color: #0890EB;
    }
  `};
`;

export default Button;