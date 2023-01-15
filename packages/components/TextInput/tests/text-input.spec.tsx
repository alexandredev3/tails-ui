import { describe, it } from "vitest";
import { a11y } from "@tails-ui/test-utils";
import { act, render, screen } from "@testing-library/react";
import { Envelope } from "phosphor-react";
import { Lock } from "phosphor-react";

import { TextInput } from "../src";

describe("Rendering a TextInput component", () => {
  it("should have no a11y violations", async () => {
    await a11y(
      <TextInput placeholder="Type your e-mail address" />
    );
  });

  it("should appear on the screen with a given placeholder", () => {
    render(
      <TextInput placeholder="Type your name" />
    );

    expect(screen.queryByPlaceholderText(/Type your name/)).not.toBeNull();
  });

  it("should appear on the screen with a given input type", () => {
    render(
      <TextInput placeholder="Type your password" type="password" />
    );

    expect(screen.queryByPlaceholderText(/Type your password/)).toHaveAttribute(
      "type",
      "password"
    );
  });

  it("should be able to focus on the input", () => {
    const { getByTestId } = render(
      <TextInput data-testid="text-input" placeholder="Type your address" />
    );    
    const input = getByTestId("text-input");

    act(() => {
      input?.focus();
    });

    expect(input).toHaveFocus();
  });
});

describe('Rendering a TextInput Icon component', () => {
  it('should appear a icon inside the input', () => {
    const { getByTestId } = render(
      <TextInput
        className="w-full"
      >
        <TextInput.Icon>
          <Envelope data-testid="input-start-icon" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail address"  />
      </TextInput>
    );

    expect(getByTestId("input-start-icon")).not.toBeNull();
    expect(screen.queryByPlaceholderText(/Type your e-mail address/)).not.toBeNull();
  });

  it('should not be visible to the accessibility API', () => {
    const { getByTestId } = render(
      <TextInput
        className="w-full"
      >
        <TextInput.Icon>
          <Lock data-testid="input-icon" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your password" type="password" />
      </TextInput>
    );

    expect(getByTestId("input-icon")).not.toBeNull();
    expect(getByTestId("input-icon")).toHaveAttribute('aria-hidden', 'true');
  });
});
