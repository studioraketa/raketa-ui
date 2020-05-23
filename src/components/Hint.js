import styled from 'styled-components'
import reset from '../reset'
import em from '../em'

export default styled.div`
  ${reset()}
  margin-top: ${em(0.3)};
  color: ${(props) =>
    props.error ? props.theme.dangerColor : props.theme.hintColor};
  font-size: ${em(0.75)};
`
