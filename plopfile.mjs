export default function (
  /**@type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper('toLowerCase', function (text) {
    return text.toLowerCase();
  })

  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
      }
    ],
    actions: function () {
      const componetsDir = 'packages/components/';
      const templatesDir = '.plop/templates/';
      const components = [
        {
          path: '{{ name }}/src/{{ name }}.tsx',
          templateFile: 'component/src/component.hbs'
        },
        {
          path: '{{ name }}/src/index.ts',
          templateFile: 'component/src/index.hbs'
        },
        {
          path: '{{ name }}/stories/{{ name }}.stories.tsx',
          templateFile: 'component/stories/story.hbs'
        },
        {
          path: '{{ name }}/package.json',
          templateFile: 'component/package.hbs'
        },
        {
          path: '{{ name }}/postcss.config.cjs',
          templateFile: 'component/postcss.config.hbs'
        },
        {
          path: '{{ name }}/tailwind.config.cjs',
          templateFile: 'component/tailwind.config.hbs'
        },
        {
          path: '{{ name }}/tsconfig.json',
          templateFile: 'component/tsconfig.hbs'
        }
      ]
      const actions = components.map((component) => ({
        type: 'add',
        path: componetsDir + component.path,
        templateFile: templatesDir + component.templateFile,
      }))

      return actions;
    }
  });
}