const capitalize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}` 
}

const toLowerCase = (str) => {
  return str.toLowerCase();
}

const COMPONENTS_DIR = 'packages/components';
const TEMPLATES_DIR = '.plop/templates';

export default function (
  /**@type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper('toLowerCase', function (text) {
    return toLowerCase(text);
  });

  plop.setHelper('capitalize', function (text) {
    return capitalize(text);
  });

  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the component description?'
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'What is the author name?'
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'What is the author Email?'
      }
    ],
    actions: function (answers) {
      const actions = [];

      actions.push({
        type: 'addMany',
        destination: `${COMPONENTS_DIR}/{{ capitalize name }}`,
        templateFiles: `${TEMPLATES_DIR}/**`,
        data: {
          ...answers
        },
        base: '.plop/templates/component'
      });

      return actions;
    }
  });
}