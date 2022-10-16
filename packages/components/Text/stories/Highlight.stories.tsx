import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '../src/Text';

export default {
  title: 'Components / Text / Highlight',
  component: Text,
  args: {
    children: [
      "Spotlight words using the ",
      <Text.Highlight>Text.Hightlight</Text.Highlight>,
      " component"
    ],
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
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};