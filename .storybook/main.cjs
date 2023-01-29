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
    "@tails-ui/storybook-mdx-docs",
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
  },
  webpackFinal: async (config) => {
    const rules = config.module.rules || [];

    rules.push({
        test: /\.(stories|story)\.tsx$/,
        use: [
          {
            loader: require.resolve('@tails-ui/storybook-mdx-docs/loader'),
            options: {}
          }
        ]
    });

    config.module.rules = rules;

    return config;
  }
}