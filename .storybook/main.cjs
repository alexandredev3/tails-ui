module.exports = {
  "stories": [
    "../packages/components/**/stories/*.stories.mdx",
    "../packages/components/**/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  "framework": "@storybook/react",
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/tails-ui/';
    }

    return config;
  }
}