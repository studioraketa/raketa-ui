import { css } from 'styled-components';

export default (props) => {
  return css`
    border: 0;
    overflow: visible;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
  `;
};
