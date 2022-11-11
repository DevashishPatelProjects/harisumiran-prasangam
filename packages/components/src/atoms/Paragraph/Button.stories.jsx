import React from 'react';

import  Paragraph  from './Paragraph';
export default {
  title: 'atom/Paragraph',
  component: Paragraph,  
};
const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Paragraph',
};

