import { Button } from '@tails-ui/button';
import { Text } from "@tails-ui/text";

import { Logo } from './components/Logo'

import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-white">
      <Logo />

      <Text.Heading>
        React Tails UI
      </Text.Heading>

      <Text>
        
      </Text>
    </div>
  )
}