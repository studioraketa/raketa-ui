import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import defaultTheme from './defaultTheme';
import Alert from './components/Alert';
import Button from './components/Button';
import ButtonLink from './components/ButtonLink';
import Card from './components/Card';
import Dialog from './components/Dialog';
import Divider from './components/Divider';
import FormControl from './components/FormControl';
import Hint from './components/Hint';
import IconButton from './components/IconButton';
import IconSpan from './components/IconSpan';
import Input from './components/Input';
import Label from './components/Label';
import Select from './components/Select';
import SelectField from './components/SelectField';
import Tabs from './components/Tabs';
import Text from './components/Text';
import Textarea from './components/Textarea';
import TextField from './components/TextField';
import Title from './components/Title';
import em from './em';
import reset from './reset';
import resetButton from './resetButton';

const RaketaUIProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

RaketaUIProvider.defaultProps = {
  theme: defaultTheme,
};

export {
  RaketaUIProvider,
  defaultTheme,
  Alert,
  Button,
  ButtonLink,
  Card,
  Dialog,
  Divider,
  FormControl,
  Hint,
  IconButton,
  IconSpan,
  Input,
  Label,
  Select,
  SelectField,
  Tabs,
  Text,
  Textarea,
  TextField,
  Title,
  em,
  reset,
  resetButton,
};
