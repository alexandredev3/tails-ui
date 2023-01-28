import { describe, expect, it } from "vitest";
import { a11y } from "@tails-ui/test-utils";
import { render, screen } from "@testing-library/react";

import { Text } from "../src";

describe("Rendering a Text component", () => {
  it("should have no a11y violations", async () => {
    await a11y(<Text>Tails UI</Text>);
  });

  it("should appear on the screen with a given text", () => {
    render(<Text>Tailwindcss</Text>);

    expect(screen.queryByText(/Tailwindcss/)).not.toBeNull();
  });

  it("should appear on the screen with the given size", () => {
    render(<Text size="sm">Tails UI</Text>);
    render(<Text size="md">Tailwindcss</Text>);
    render(<Text size="lg">Design System</Text>);

    expect(screen.queryByText(/Tails UI/)).toHaveClass("text-sm");
    expect(screen.queryByText(/Tailwindcss/)).toHaveClass("text-md");
    expect(screen.queryByText(/Design System/)).toHaveClass("text-lg");
  });
});

describe("Rendering a Text.Heading component", () => {
  it("should have no a11y violations", async () => {
    await a11y(<Text.Heading>TailwindCSS</Text.Heading>);
  });

  it("should appear on the screen with a given text", () => {
    render(<Text.Heading>Design System</Text.Heading>);

    expect(screen.queryByText(/Design System/)).not.toBeNull();
  });

  it("should appear on the screen with the given size", () => {
    render(<Text.Heading size="sm">Typescript</Text.Heading>);
    render(<Text.Heading size="md">Javascript</Text.Heading>);
    render(<Text.Heading size="lg">React.js</Text.Heading>);

    expect(screen.queryByText(/Typescript/)).toHaveClass("text-lg");
    expect(screen.queryByText(/Javascript/)).toHaveClass("text-xl");
    expect(screen.queryByText(/React.js/)).toHaveClass("text-2xl");
  });
});

describe("Rendering a Text.Highlight component", () => {
  it("should have no a11y violations", async () => {
    await a11y(
      <Text>
        Design <Text.Highlight>System</Text.Highlight>
      </Text>
    );
  });

  it("should appear on the screen with the given text highlighted", () => {
    render(
      <Text>
        Tails <Text.Highlight>UI</Text.Highlight>
      </Text>
    );

    expect(screen.queryByText(/UI/)).not.toBeNull();
    expect(screen.queryByText(/UI/)).toHaveClass("bg-cyan-500 text-black");
  });
});

describe("Rendering a custom Text component", () => {
  it("should have no a11y violations", async () => {
    await a11y(
      <Text asChild>
        <p>Custom Text Element</p>
      </Text>
    );
  });

  it("should appear on the screen with the given child element as the parent element", async () => {
    render(
      <Text asChild>
        <p>Lorem ipsum</p>
      </Text>
    );

    const element = screen.queryByText(/Lorem ipsum/);

    expect(element).not.toBeNull();
    expect(element).toMatchInlineSnapshot(`
      <p
        class="text-gray-100 text-md font-sans"
      >
        Lorem ipsum
      </p>
    `);
  });
});
