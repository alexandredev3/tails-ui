import { Envelope, Lock } from "phosphor-react";

import { Button } from "@tails-ui/button";
import { Text } from "@tails-ui/text";
import { Label } from "@tails-ui/label";
import { TextInput } from "@tails-ui/text-input";
import { Checkbox } from "@tails-ui/checkbox";

import { Logo } from "./components/Logo";

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <header className="flex flex-col items-center">
        <Logo />

        <Text.Heading size="lg" className="mt-4">
          Tails UI Playground
        </Text.Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Sign In and get started now!
        </Text>
      </header>

      <form className="w-full max-w-[400px] flex flex-col gap-4 items-stretch mt-10">
        <Label htmlFor="email" className="font-semibold flex flex-col gap-3">
          E-mail address
          <TextInput>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              name="email"
              type="email"
              placeholder="alexandre@gmail.com"
            />
          </TextInput>
        </Label>

        <Label htmlFor="password" className="font-semibold flex flex-col gap-3">
          Your password
          <TextInput>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              name="password"
              type="password"
              placeholder="***********"
            />
          </TextInput>
        </Label>

        <div className="flex items-center gap-2">
          <Checkbox id="remember-me" name="remember-me">
            <Checkbox.Icon />
          </Checkbox>

          <Label htmlFor="remember-me">
            <Text size="sm" className="text-gray-200">
              Remember me for 30 days
            </Text>
          </Label>
        </div>

        <Button type="submit" className="mt-4">Get Started</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" className="text-gray-400 underline hover:text-gray-200" asChild>
          <a href="#">Forgot your password?</a>
        </Text>
        <Text size="sm" className="text-gray-400 underline hover:text-gray-200" asChild>
          <a href="#">Still don’t have an account? Register now!</a>
        </Text>
      </footer>
    </div>
  );
}
