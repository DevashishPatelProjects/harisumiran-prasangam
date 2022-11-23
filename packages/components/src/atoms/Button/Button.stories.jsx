import React from 'react';
import ICONS from "../Icon/icons.json"

import  Button  from './Button';
const iconOptions = Object.keys(ICONS).sort().reduce((prev, curr) => { return {...prev, [curr]: curr} }, { 'NONE': null })
export default {
  title: 'atom/Button',
  component: Button, 
  argTypes: {
    theme: {
      options: ['primary', 'secondary',
      'danger',
      'info',
      'success',
      'warning',
      'dark',
    ],
      control: { type: 'select' },
    },
    size:{
      control:'radio',
      options:['default','small','large']
    },
    isButton:{
      control:'boolean',
    },
    variant:{
      control:'select',
      options:['primary','secondary','dashed']
    },
    icon: { options: iconOptions, control: 'select' }, 

  },
};
const Template = (args) => 

<>
<Button {...args} />
</>

const onClick = ()=>{
 alert(`clicked`)
}


export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  size:'default',
  theme:'primary',
  variant:'primary',
  href:"#",
  onClick
};
export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } }
Hover.args = {
  text: 'Button',
  size:'default',
  theme:'primary',
  variant:'primary',
  href:"#",
  onClick
};
export const Focus = Template.bind({});
Focus.parameters = { pseudo: { focus: true } }
Focus.args = {
  text: 'Button',
  size:'default',
  theme:'primary',
  variant:'primary',
  href:"#",
  onClick
};




