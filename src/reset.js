import { css } from 'styled-components';

export default (props) => {
  return css`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.baseFontSize};
    line-height: ${props => props.theme.lineHeight};
    color: ${props => props.theme.textColor};
    font-weight: normal;
    background-color: transparent;
  `;
}
