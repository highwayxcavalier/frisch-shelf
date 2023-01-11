module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './app/hooks/',
              rootPathPrefix: '@hooks/',
            },
            {
              rootPathSuffix: './app/types/',
              rootPathPrefix: '@types/',
            },
            {
              rootPathSuffix: './app/graphql/',
              rootPathPrefix: '@graphql/',
            },
            {
              rootPathSuffix: './app/ui/',
              rootPathPrefix: '@ui/',
            },
            {
              rootPathSuffix: './app/utils/',
              rootPathPrefix: '@utils/',
            },
          ],
        },
      ],
    ],
  };
};
