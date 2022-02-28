// import { Viewer, Rectangle, Ion, Camera, createWorldTerrain } from 'cesium'
// import 'cesium/Build/Cesium/Widgets/widgets.css'

import * as Cesium from '@/Cesium/Source/Cesium.js'
import '@/Cesium/Source/Widgets/widgets.css'
const config = {
  geocoder: false, // 一种地理位置搜索工具，用于显示相机访问的地理位置。
  homeButton: false, // 首页位置，点击之后将视图跳转到默认视角。
  sceneModePicker: false, // 切换2D、3D 和 Columbus View (CV) 模式。
  baseLayerPicker: false, // 选择三维数字地球的底图（imagery and terrain）。
  navigationHelpButton: false, // 帮助提示，如何操作数字地球。
  animation: false, // 控制视窗动画的播放速度。
  timeline: false, // 展示当前时间和允许用户在进度条上拖动到任何一个指定的时间。
  fullscreenButton: false, // 视察全屏按钮。
  shouldAnimate: true
  // terrainProvider: createWorldTerrain()
}
const china = Cesium.Rectangle.fromDegrees(100, -10, 120, 75)
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = china

Cesium.Ion.defaultAccessToken =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyOGUzOTI3Yy01ZDdkLTQ3ZTctODA1NS0zM2VmNzM1YTExNjUiLCJpZCI6Mjc0NzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODk1MzAxMzJ9.PW5dNgUC_2ob_BRoORilwQQXQGN18azvCsMfrFSDUr0'

export default function initMap (divId:string) {
  const viewer = new Cesium.Viewer(divId, config)
  viewer._cesiumWidget._creditContainer.style.display = 'none'
  return viewer
  // var imageryLayers = viewer.imageryLayers
}
// function removeDefaultMap() {
//   // 移除默认的影像图层
//   imageryLayers.remove(imageryLayers.get(0))
// }
// export default { viewer, imageryLayers, initMap, removeDefaultMap }
