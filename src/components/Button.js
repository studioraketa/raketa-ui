import styled from 'styled-components';
import { css } from 'styled-components';
import reset from '../reset';
import resetButton from '../resetButton';
import em from '../em';

const buttonTheme = (props) => {
  let backgroundColor = 'buttonColor';
  let textColor = 'hintColor';

  if (props.primary) {
    backgroundColor = 'primaryColor';
    textColor = 'whiteColor';
  } else if (props.success) {
    backgroundColor = 'successColor';
    textColor = 'whiteColor';
  } else if (props.danger) {
    backgroundColor = 'dangerColor';
    textColor = 'whiteColor';
  }

  return {
    backgroundColor,
    textColor,
  }
}

const buttonColors = (props) => {
  return css`
    color: ${props => props.theme[buttonTheme(props).textColor]};
    background-color: ${props => props.theme[buttonTheme(props).backgroundColor]};
  `;
};

export default styled.button`
  ${reset()}
  ${resetButton()}
  ${buttonColors()}
  display: inline-block;
  font-size: ${props => props.sm ? em(.75) : em(1)};
  padding: ${props => props.sm ? `${em(.3)} ${em(.7)}` : `${em(.5)} ${em(1)}`};
  margin-right: ${em(.5)};
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    text-decoration: none;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(1);
  }

  &:disabled {
    opacity: .5;

    &:hover {
      transform: scale(1);
      cursor: default;
    }
  }
`;
