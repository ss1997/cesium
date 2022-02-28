<template>
    <div id="cesiumContainer"></div>
</template>

<script>
import { onMounted } from 'vue'
import initMap from './mapConfig'
let viewer = null
export default {
  components: {

  },
  setup () {
    onMounted(() => {
      viewer = initMap('cesiumContainer')
      window.viewer = viewer
    })
  }
}
</script>
<style scoped>
  #cesiumContainer{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
