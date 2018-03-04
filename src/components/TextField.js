import React from 'react';

import generateID from '../generateID';

import FormControl from './FormControl';
import Label from './Label';
import Input from './Input';
import Textarea from './Textarea';
import Hint from './Hint';

export default (props) => {
  const id = generateID();
  const { label, hint, multiline, onChange } = props;

  const inputProps = Object.assign({}, props);
  delete inputProps.label;
  delete inputProps.hint;
  delete inputProps.multiline;
  delete inputProps.onChange;

  const Component = multiline ? Textarea : Input;

  return (
    <FormControl>
      {label ? (<Label htmlFor={id} error={props.error}>{label}</Label>) : ''}
      <Component id={id} onChange={(e) => onChange(e.target.value)} {...inputProps} />
      {hint ? (<Hint>{hint}</Hint>) : ''}
    </FormControl>
  );
};
