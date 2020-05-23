import styled from 'styled-components'
import reset from '../reset'
import em from '../em'

export default styled.label`
  ${reset()}
  display: block;
  margin-bottom: ${em(0.1)};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${em(0.75)};
  cursor: pointer;
  color: ${(props) =>
    props.error ? props.theme.dangerColor : props.theme.textColor};
`
