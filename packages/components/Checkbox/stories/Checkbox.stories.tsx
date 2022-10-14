import { Meta, StoryObj } from "@storybook/react";
import { Checks } from 'phosphor-react';
import { Label } from "@tails-ui/label";

import { Checkbox, type CheckboxRootProps } from "../src/Checkbox";

export default {
  title: "Components / Checkbox",
  component: Checkbox,
  args: {
    children: (
      <Checkbox.Icon />
    ),
    id: 'terms',
    name: 'terms'
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Label htmlFor="terms" className="text-sm">
          Accept terms & conditions
        </Label>
      </div>
    )
  ]
} as Meta<CheckboxRootProps>;

export const Default: StoryObj<CheckboxRootProps> = {};

export const CustomIcon: StoryObj<CheckboxRootProps> = {
  args: {
    children: (
      <Checkbox.Icon>
        <Checks />
      </Checkbox.Icon>
    ),
    checked: true
  },
  argTypes: {
    checked: {
      control: {
        type: 'boolean'
      }
    }
  }
};

