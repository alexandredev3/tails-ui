import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@tails-ui/text-input";
import { Envelope } from 'phosphor-react'

import { Label, type LabelProps } from "../src/Label";

export default {
  title: "Components / Label",
  component: Label,
  args: {
    children: "Lorem ipsum",
  }
} as Meta<LabelProps>;

export const Default: StoryObj<LabelProps> = {};

export const InputLabel: StoryObj<LabelProps> = {
  args: {
    children: "E-mail address",
    htmlFor: "email",
    className: "mb-3 text-4 text-gray-100"
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col">
        {Story()}
        <TextInput>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input
            type="email"
            placeholder="alexandre@gmail.com"
            name="email"
            id="email"
          />
        </TextInput>
      </div>
    ),
  ],
};
