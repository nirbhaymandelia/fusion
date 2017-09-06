import React from 'react';
import { storiesOf } from '@storybook/react';
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
  Typing
} from '../';

/****************************
 * Atomic
 ****************************/

storiesOf('Atomic/Alert', module)
  .add('with info', () => (
    <Alert type="info">This is info!!</Alert>
  ))
  .add('with warning', () => (
    <Alert type="warning">This is warning!!</Alert>
  ))
  .add('with success', () => (
    <Alert type="success">This is success!!</Alert>
  ))
  .add('with error', () => (
    <Alert type="error">This is error!!</Alert>
  ));

storiesOf('Atomic/Avatar', module)
  .add('default', () => (
    <Avatar />
  ));

storiesOf('Atomic/BackgroundImage', module)
  .add('default', () => (
    <BackgroundImage />
  ));

storiesOf('Atomic/Banner', module)
  .add('default', () => (
    <Banner />
  ));

storiesOf('Atomic/BlockQuote', module)
  .add('default', () => (
    <BlockQuote>Blockquote tag specifies a section that is quoted from another source.</BlockQuote>
  ));

storiesOf('Atomic/Bounce', module)
  .add('default', () => (
    <Bounce />
  ));

storiesOf('Atomic/Button', module)
  .add('default', () => (
    <Button>Button</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Button</Button>
  ));

storiesOf('Atomic/CardGrid', module)
  .add('default', () => (
    <CardGrid />
  ));

/****************************
 * Navigation
 ****************************/

storiesOf('Navigation/Navbar', module)
  .add('default', () => (
    <Navbar />
  ));

storiesOf('Navigation/Pagination', module)
  .add('default', () => (
    <Pagination />
  ));


/****************************
 * Forms
 ****************************/


/****************************
 * Loaders
 ****************************/

storiesOf('Loaders/Loader', module)
  .add('default', () => (
    <Loader />
  ));
storiesOf('Loaders/ProgressBar', module)
  .add('default', () => (
    <ProgressBar />
  ));

storiesOf('Loaders/ProgressCircle', module)
  .add('default', () => (
    <ProgressCircle />
  ));

/****************************
 * Charts
 ****************************/

storiesOf('Charts/BarChart', module)
.add('default', () => (
  <BarChart />
));

// storiesOf('Tabs', module)
//   .add('default', () => (
//     <Tabs onClick={() => { }} />
//   ));
