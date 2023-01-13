<p align="center">
  <a href="https://tails-ui-playground.vercel.app" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/alexandredev3/tails-ui/HEAD/.github/logo-beta.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/alexandredev3/tails-ui/HEAD/.github/logo-beta.svg">
      <img alt="Tails UI" src="https://raw.githubusercontent.com/alexandredev3/tails-ui/HEAD/.github/logo.svg" width="350" height="70" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  A Design System for TailwindCSS
</p>

<p align="center">
    <a href="https://github.com/alexandredev3/tails-ui/actions"><img src="https://img.shields.io/github/actions/workflow/status/alexandredev3/tails-ui/deploy-docs.yaml?branch=main" alt="Components Storybook Docs"></a>
    <a href="https://github.com/alexandredev3/tails-ui/blob/master/LICENSE.txt"><img src="https://img.shields.io/github/license/alexandredev3/tails-ui" alt="License"></a>
</p>

## Documentation

To see all the available components and usages, visit <a href="https://alexandredev3.github.io/tails-ui">alexandredev3.github.io/tails-ui.com</a>
> Visit <a href="https://tails-ui-playground.vercel.app/">https://tails-ui-playground.vercel.app/</a> to play around with the demo.

## Usage
Follow these steps to start using the components:

1. Install <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a> in your existing React project.
```bash
$ npm install -D tailwindcss
$ npx tailwindcss init
```

2. Install Tails UI Tailwind plugin in your project.
```bash
$ npm install @tails-ui/plugin
```

3. Install the components that you want to use in your project.
```bash
$ npm install @tails-ui/checkbox @tails-ui/button
```
Tails UI allows you to download only those components that you really need in your project.

4. Add the Tails UI plugin to your project `tailwind.config.js` file.
```cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*.tsx'
  ],
  plugins: [require('@tails-ui/plugin')]
}
```
5. Now you can start to use the components!
```tsx
function Example() {
  return (
    <main>
      <div className="flex items-center gap-2">
        <Checkbox
          id="terms"
          name="terms"
        >
          <Checkbox.Icon />
        </Checkbox>
        <Label
          className="text-sm"
          htmlFor="terms"
        >
          Accept terms & conditions
        </Label>
      </div>
    </main>
  );
}
```
## Contributing
