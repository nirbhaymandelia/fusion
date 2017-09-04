import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'theming';
import {
  Alert,
  Avatar,
  BackgroundImage,
  Banner,
  BarChart,
  BlockQuote,
  Bounce,
  Button,
  CardGrid,
  CountDownTimer,
  Dialog,
  Doughnut,
  Dropdown,
  Heading,
  Loader,
  Logo,
  Navbar,
  Pagination,
  Panel,
  Panel2,
  PieChart,
  ProgressBar,
  ProgressCircle,
  Rating,
  Ripples,
  Row,
  StatusMessage,
  Stepper,
  StepperControl,
  theme,
  ToggleButton,
  Tooltip,
  Truncate,
  Typing,
  Tabs,
} from '../';

storiesOf('Alert', module)
  .add('with info', () => (
    <ThemeProvider theme={theme}>
      <Alert type="info">This is info!!</Alert>
    </ThemeProvider>
  ))
  .add('with warning', () => (
    <ThemeProvider theme={theme}>
      <Alert type="warning">This is warning!!</Alert>
    </ThemeProvider>
  ))
  .add('with success', () => (
    <ThemeProvider theme={theme}>
      <Alert type="success">This is success!!</Alert>
    </ThemeProvider>
  ))
  .add('with error', () => (
    <ThemeProvider theme={theme}>
      <Alert type="error">This is error!!</Alert>
    </ThemeProvider>
  ));

storiesOf('Avatar', module)
  .add('default', () => (
    <ThemeProvider theme={theme}>
      <Avatar />
    </ThemeProvider>
  ));