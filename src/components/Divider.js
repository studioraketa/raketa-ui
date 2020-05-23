import styled from 'styled-components'
import reset from '../reset'
import em from '../em'

export default styled.hr`
  ${reset()}
  margin: ${em(1)} 0;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`
