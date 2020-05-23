import React from 'react'

import generateID from '../generateID'

import FormControl from './FormControl'
import Label from './Label'
import Select from './Select'
import Hint from './Hint'

export default (props) => {
  const id = generateID()
  const { label, hint, options, placeholder, onChange } = props
  const inputProps = Object.assign({}, props)
  delete inputProps.label
  delete inputProps.hint
  delete inputProps.options
  delete inputProps.placeholder
  delete inputProps.onChange

  return (
    <FormControl>
      {label ? (
        <Label htmlFor={id} error={props.error}>
          {label}
        </Label>
      ) : (
          ''
        )}
      <Select
        id={id}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
      >
        {placeholder ? (
          <option key='placeholder' value={null}>
            {placeholder}
          </option>
        ) : (
            ''
          )}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.text}
          </option>
        ))}
      </Select>
      {hint ? <Hint>{hint}</Hint> : ''}
    </FormControl>
  )
}
