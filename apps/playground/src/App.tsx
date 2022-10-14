import { Button } from '@tails-ui/button';
import { Typography } from "@tails-ui/typography";

function App() {
  return (
    <div>
      <Typography>
        Hello World
      </Typography>

      <Typography>
        <h1>
          Hello World
        </h1>
      </Typography>

      <Button onClick={() => alert('Hello World')}>
        <span>Click me</span>
      </Button>
    </div>
  )
}

export default App
