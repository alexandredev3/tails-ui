import { describe, it } from "vitest";
import { a11y } from "@tails-ui/test-utils";
import { render, screen } from "@testing-library/react";
import { Envelope } from "phosphor-react";

import { TextInput } from "../src";

describe("Rendering a TextInput component", () => {
  it("should have no a11y violations", async () => {
    await a11y(
      <TextInput>
        <TextInput.Input placeholder="Type your e-mail address" />
      </TextInput>
    );
  });

  it("should appear on the screen with a given placeholder", () => {
    render(
      <TextInput>
        <TextInput.Input placeholder="Type your name" />
      </TextInput>
    );

    expect(screen.queryByPlaceholderText(/Type your name/)).not.toBeNull();
  });

  it("should appear on the screen with a given input type", () => {
    render(
      <TextInput>
        <TextInput.Input placeholder="Type your password" type="password" />
      </TextInput>
    );

    expect(screen.queryByPlaceholderText(/Type your password/)).toHaveAttribute(
      "type",
      "password"
    );
  });
});

describe('Rendering a TextInput Icon component', () => {
  it.todo('should appear a icon inside the input', () => {});
});
