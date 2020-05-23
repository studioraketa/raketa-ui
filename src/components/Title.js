import styled from 'styled-components'
import reset from '../reset'
import em from '../em'

const titleSize = (props) => {
  const defaultSize = 2.369
  if (props.primary) return em(defaultSize)
  if (props.secondary) return em(1.777)
  if (props.third) return em(1.333)
  return em(defaultSize)
}

export default styled.h1`
  ${reset()}
  font-weight: 300;
  font-size: ${(props) => titleSize(props)};
  marginbottom: ${em(0.5)};
`
