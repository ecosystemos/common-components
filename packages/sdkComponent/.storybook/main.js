const path = require("path");
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../stories/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-controls",
  ],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("../../node_modules/@emotion/react"),
          "emotion-theming": toPath("../../node_modules/@emotion/react"),
        },
      },
    };
  },
};
