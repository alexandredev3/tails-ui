import { Button } from "@tails-ui/button";
import { Text } from "@tails-ui/text";

import { Logo } from "./components/Logo";

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-white">
      <header>
        <Logo />

        <Text.Heading size="lg">
          React Tails UI
        </Text.Heading>

        <Text size="lg" className="text-gray-400">
          Sign In and get started now!
        </Text>
      </header>
    </div>
  );
}
