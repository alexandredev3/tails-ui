import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

import { TextInput, TextInputRootProps } from "../src/TextInput";

export default {
  title: "Components / TextInput",
  component: TextInput,
  args: {
    className: 'w-full',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    error: {
      options: [false, true],
      control: {
        type: 'boolean'
      }
    }
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {
  args: {
    placeholder: 'Type your e-mail address'
  }
};

export const StartIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
};

export const EndIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder="Type your e-mail address" />,
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
    ],
  },
};
