import React from 'react';
import Topbar, { ITopbar } from '../src/components/Topbar';

export default {
  title: 'Topbar',
  component: Topbar,
  argTypes: {},
} as any;

const Template = (props: ITopbar) => {
  return <Topbar {...props}>Micellium ui kit</Topbar>;
};

export const Default = Template.bind({});
