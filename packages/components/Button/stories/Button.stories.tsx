import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../src/Button';

export default {
  title: 'Components / Button',
  component: Button,
  args: {
    children: 'Get started',
    className: 'w-full'
  },
  argTypes: {}
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};