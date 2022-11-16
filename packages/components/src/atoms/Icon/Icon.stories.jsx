import React from 'react';
import ICONS from './icons.json'

import  Icon  from './Icon';

const iconOptions = Object.keys(ICONS).sort().reduce((prev, curr) => { return {...prev, [curr]: curr} }, { 'NONE': null })
export default {
  title: 'atom/Icon',
  component: Icon, 
  argTypes:{ icon: { options: iconOptions, control: 'select' }, 
  fill: { control: 'color' },
  size:{control:'number'}
 }
};
const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'PLAY',
  size:20
};

