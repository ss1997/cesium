<template>
  <div class="home">
    <Map></Map>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Map from '@/views/cesium/index.vue'

@Options({
  components: {
    Map
  }
})
export default class Home extends Vue {}
</script>
