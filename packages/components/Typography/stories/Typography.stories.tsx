import { Meta, StoryObj } from '@storybook/react';

import { Typography, TypographyProps } from '../src/Typography';

export default {
  title: 'Components / Typography',
  component: Typography,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TypographyProps>;

export const Default: StoryObj<TypographyProps> = {};

export const Small: StoryObj<TypographyProps> = {
  args: {
    size: 'sm'
  }
};

export const Large: StoryObj<TypographyProps> = {
  args: {
    size: 'lg'
  }
};

export const CustomComponent: StoryObj<TypographyProps> = {
  args: {
    asChild: true,
    children: (
      <p>Lorem ipsum</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};