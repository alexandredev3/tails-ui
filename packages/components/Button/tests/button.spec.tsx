import { describe, expect, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { a11y } from '@tails-ui/test-utils';
import { SignIn } from 'phosphor-react';

import { Button } from '../src';

describe('Rendering Button component', () => {
  it('should have no a11y violations', async () => {
    await a11y(<Button>Click Me</Button>);
  });

  it('should appear on the screen with a given label', () => {
    render(<Button>Get Started</Button>);

    expect(screen.queryByText(/Get Started/)).not.toBeNull();
  });
});

describe('Rendering a Button Icon component', () => {
  it('should appear an icon inside the button', () => {
    const { getByTestId } = render(
      <Button className="w-full">
        <Button.Icon>
          <SignIn data-testid="button-icon" />
        </Button.Icon>
      </Button>
    );

    expect(getByTestId("button-icon")).not.toBeNull();
  });

  it('should appear an icon and a label inside the button', async () => {
    const { getByTestId } = render(
      <Button className="w-full">
        <Button.Icon>
          <SignIn data-testid="start-button-icon" />
        </Button.Icon>
        SignIn
      </Button>
    );

    expect(getByTestId("start-button-icon")).not.toBeNull();
    expect(screen.queryByText(/SignIn/)).not.toBeNull();
  });

  it('should not be visible to the accessibility API', () => {
    const { getByTestId } = render(
      <Button className="w-full">
        <Button.Icon>
          <SignIn data-testid="button-icon" />
        </Button.Icon>
      </Button>
    );

    expect(getByTestId("button-icon")).toHaveAttribute('aria-hidden', 'true');
  });
});