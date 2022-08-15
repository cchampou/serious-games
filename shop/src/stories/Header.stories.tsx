import React from 'react';
import Header from '../components/header/Header';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default = () => <Header />;
