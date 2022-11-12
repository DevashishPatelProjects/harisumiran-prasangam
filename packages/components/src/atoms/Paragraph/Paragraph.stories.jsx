import React from 'react';

import  Paragraph  from './Paragraph';
export default {
  title: 'atom/Paragraph',
  component: Paragraph,  
};
const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan eget nulla a rutrum. Nunc fringilla bibendum pulvinar. Fusce in orci sed leo vestibulum iaculis in sit amet nisi. Fusce imperdiet, ante vitae mollis semper, leo orci ultricies tortor, quis posuere tellus orci ut ligula. Ut mattis purus id magna dapibus pellentesque. Suspendisse in justo a sapien accumsan pellentesque ut vel leo. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed orci elit, semper consectetur porttitor et, hendrerit ut diam. Morbi gravida ultrices aliquam. Sed ligula neque, accumsan in dui nec, porttitor sollicitudin ligula.',
};

