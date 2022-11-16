import React from 'react';

import  Button  from './Button';
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
    }

  },
};
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  theme:'primary',
  size:'default',
  href:"#"
};


