import styled from 'styled-components'
import reset from '../reset'
import em from '../em'

export default styled.input`
  &[type='color'],
  &[type='date'],
  &[type='datetime'],
  &[type='datetime-local'],
  &[type='email'],
  &[type='month'],
  &[type='number'],
  &[type='password'],
  &[type='search'],
  &[type='tel'],
  &[type='text'],
  &[type='time'],
  &[type='url'],
  &[type='week'],
  &:not([type]) {
    ${reset()};
    width: 100%;
    padding: ${em(0.3)} ${em(0.5)};
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.borderColor};
    border-color: ${(props) =>
    props.error ? props.theme.dangerColor : props.theme.borderColor};
    outline: none;

    &:focus {
      border-color: ${(props) =>
    props.error ? props.theme.dangerColor : props.theme.primaryColor};
    }
  }
`
