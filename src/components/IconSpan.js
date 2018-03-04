import styled from 'styled-components';
import reset from '../reset';
import resetButton from '../resetButton';
import em from '../em';

export default styled.span`
  ${reset()}
  display: inline-block;
  margin-right: ${em(.25)};
  background-color: ${props => props.primary ? props.theme.primaryColor : (props.danger ? props.theme.dangerColor : props.theme.sideNavBorderColor)};
  color: #fff;
  width: ${em(2)};
  height: ${em(2)};
  font-size: ${em(.75)};
  text-align: center;
  line-height: ${em(2)};
  cursur: pointer;
  border-radius: ${props => props.theme.innerBorderRadius};

  &:hover {
    transform: scale(1.1);
  }
`;
