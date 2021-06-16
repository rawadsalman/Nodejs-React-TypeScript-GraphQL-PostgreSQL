const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
  babel: {
    plugins: ['@emotion'],
  },
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            noIeCompat: true,
            modifyVars: {
              'primary-color': 'rgb(255, 0, 130)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
