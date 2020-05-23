import styled from 'styled-components'
import reset from '../reset'
import resetButton from '../resetButton'
import em from '../em'

export default styled.button`
  ${reset()}
  ${resetButton()}
  margin-right: ${em(0.25)};
  background-color: ${(props) =>
    props.primary
      ? props.theme.primaryColor
      : props.danger
        ? props.theme.dangerColor
        : props.theme.sideNavBorderColor};
  color: #fff;
  width: ${em(2)};
  height: ${em(2)};
  font-size: ${em(0.75)};
  border-radius: ${(props) => props.theme.innerBorderRadius};

  &:hover {
    transform: scale(1.1);
  }
`
