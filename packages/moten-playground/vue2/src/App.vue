<template>
  <div id="app">
    <mo-image src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"></mo-image>
  </div>
</template>

<script>
import moten from '@moten/ui/vue2'
const { MoImage } = moten

export default {
  name: 'App',
  components: {
    MoImage,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
