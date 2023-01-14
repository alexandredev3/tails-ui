import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { a11y } from '@tails-ui/test-utils';

import { Button } from '../src';

describe('Rendering Button component', () => {
  it('should have no a11y violations', async () => {
    await a11y(<Button>Click Me</Button>);
  });

  it('should successfully apper on the screen with a given label', () => {
    render(<Button>SignIn</Button>);

    expect(screen.findByText(/SignIn/)).not.toBeNull();
  });
});