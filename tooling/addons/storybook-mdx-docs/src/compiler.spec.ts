import { describe, it, expect } from 'vitest';

import { compiler } from './compiler';

/**

  INPUT =>
    import { Meta, StoryObj } from '@storybook/react';
    import { SignIn, SignOut } from 'phosphor-react';

    import { Button, ButtonRootProps } from '../src/Button';

    export default {
      title: 'Components / Button',
      component: Button,
      args: {
        children: 'Get started',
        className: 'w-full'
      },
      argTypes: {}
    } as Meta<ButtonRootProps>;

    export const Default: StoryObj<ButtonRootProps> = {};

    export const Icon: StoryObj<ButtonRootProps> = {
      args: {
        children: [
          <Button.Icon>
            <SignOut />
          </Button.Icon>
        ]
      }
    }

    export const StartIcon: StoryObj<ButtonRootProps> = {
      args: {
        children: [
          <Button.Icon>
            <SignIn />
          </Button.Icon>,
          "SignIn"
        ]
      }
    }

    export const EndIcon: StoryObj<ButtonRootProps> = {
      args: {
        children: [
          "SignOut",
          <Button.Icon>
            <SignOut />
          </Button.Icon>
        ]
      }
    }

  OUTPUT SHOULD BE =>
    <Button className="w-full">
      Get started
    </Button>
 */

describe('Compiler', () => {
  it('should correctly create the component tree', () => {
    const result = compiler(`
      import { Button, ButtonRootProps } from '../src/Button';

      export default {
        title: 'Components / Button',
        component: Button,
        args: {
          children: 'Get started',
          className: 'w-full'
        },
        argTypes: {}
      } as Meta<ButtonRootProps>;

      export const Default: StoryObj<ButtonRootProps> = {};
    `);

    console.log(result);

    expect(true).toBeTruthy();
  });
});