export default function (
  /**@type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/components/{{ name }}/src/{{ name }}.tsx',
        templateFile: '.plop/templates/component/src/component.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{ name }}/src/index.ts',
        templateFile: '.plop/templates/component/src/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{ name }}/stories/{{ name }}.stories.tsx',
        templateFile: '.plop/templates/component/stories/story.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{ name }}/package.json',
        templateFile: '.plop/templates/component/package.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{ name }}/postcss.config.cjs',
        templateFile: '.plop/templates/component/postcss.config.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{ name }}/tailwind.config.cjs',
        templateFile: '.plop/templates/component/tailwind.config.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{ name }}/tsconfig.json',
        templateFile: '.plop/templates/component/tsconfig.hbs'
      },
    ]
  });
}