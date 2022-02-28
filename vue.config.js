const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      // copy-webpack-plugin 5.x 的写法
      new CopyWebpackPlugin([{
        from: 'src/Cesium/Source/Workers',
        to: 'cesium/Workers'
      }]),
      new CopyWebpackPlugin([{
        from: 'src/Cesium/Source/Assets',
        to: 'cesium/Assets'
      }]),
      new CopyWebpackPlugin([{
        from: 'src/Cesium/Source/Widgets',
        to: 'cesium/Widgets'
      }]),
      new CopyWebpackPlugin([{
        from: 'src/Cesium/ThirdParty',
        to: 'cesium/ThirdParty'
      }]),

      new webpack.DefinePlugin({
        // 要将以上目录复制到定义的该目录下 目录没有复制对的话创建地图时🌏出不来
        CESIUM_BASE_URL: JSON.stringify('./cesium')
      })
    ],
    module: {
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/
      // unknownContextRegExp: //cesium/cesium/Source/Core/buildModuleUrl.js/
    },
    amd: {
      toUrlUndefined: true
    }
  }
}
