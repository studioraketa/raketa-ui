import styled from 'styled-components';
import reset from '../reset';
import em from '../em';

export default styled.textarea`
  & {
    ${reset()};
    width: 100%;
    height: ${em(8)};
    padding: ${em(.3)} ${em(.5)};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.borderColor};
    border-color: ${props => props.error ? props.theme.dangerColor : props.theme.borderColor};
    outline: none;

    &:focus {
      border-color: ${props => props.error ? props.theme.dangerColor : props.theme.primaryColor};
    }
  }
`;
