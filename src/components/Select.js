import styled from 'styled-components'
import reset from '../reset'
import em from '../em'

export default styled.select`
  ${reset()}
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  padding: ${em(0.3)} ${em(0.5)};
  color: ${(props) => props.theme.textColor};
  border: 1px solid
    ${(props) =>
    props.error ? props.theme.dangerColor : props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  background-repeat: no-repeat;
  background-size: ${em(1.5)};
  background-position: right center;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNjBweCIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDE2MCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+YXJyb3cgY29weTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImFycm93LWNvcHkiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZT0iIzAwMDAwMCI+ICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoLTIiIHBvaW50cz0iMTIuODcyMTQ2IDMwLjA4MTE4MjcgNDguNzg5NDk4NyA3My4wMDUzMDY2IDg3LjgwODkzNTYgMjkuNTk3OTMyOCI+PC9wb2x5bGluZT4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${(props) =>
    props.error ? props.theme.dangerColor : props.theme.primaryColor};
  }
`
