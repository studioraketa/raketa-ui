import styled from 'styled-components';
import { css } from 'styled-components';
import reset from '../reset';
import em from '../em';

const alertTheme = (props) => {
  let textColor = 'textColor';
  let borderColor = 'hintColor';
  let backgroundColor = 'hintLightColor';

  if (props.primary) {
    textColor = 'primaryColor';
    borderColor = 'primaryColor';
    backgroundColor = 'primaryLightColor';
  } else if (props.success) {
    textColor = 'successColor';
    borderColor = 'successColor';
    backgroundColor = 'successLightColor';
  } else if (props.danger) {
    textColor = 'dangerColor';
    borderColor = 'dangerColor';
    backgroundColor = 'dangerLightColor';
  }

  return {
    textColor,
    borderColor,
    backgroundColor,
  }
};

const alertColors = (props) => {
  return css`
    background-color: ${props => props.theme[alertTheme(props).backgroundColor]};
    color: ${props => props.theme[alertTheme(props).textColor]};
    border-color: ${props => props.theme[alertTheme(props).backgroundColor]};
  `;
};

export default styled.div`
  ${reset()}
  ${alertColors()}
  margin-bottom: ${em(1)};
  padding: ${em(.5)};
  border: 1px solid;
  border-radius: ${props => props.theme.borderRadius};
`;
