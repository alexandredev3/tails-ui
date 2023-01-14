import type { ReactElement } from 'react';
import { expect } from 'vitest';
import { axe, toHaveNoViolations, type JestAxeConfigureOptions } from 'jest-axe';
import { render, type RenderOptions } from '@testing-library/react';

expect.extend(toHaveNoViolations);

export async function a11y(
  element: ReactElement,
  axeOptions?: JestAxeConfigureOptions,
  renderingOptions?: RenderOptions
) {
  const { container } = render(element, renderingOptions);

  return expect(await axe(container, axeOptions)).toHaveNoViolations();
} 