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




