import React from 'react';
import Topbar from '../src/components/Topbar';
import { ITopbar } from '../src/components/Topbar/types';

export default {
  title: 'Topbar',
  component: Topbar,
  argTypes: {},
} as any;

const Template = (props: ITopbar) => {
  return <Topbar {...props}>Micellium</Topbar>;
};

export const Default = Template.bind({});
