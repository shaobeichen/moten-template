<script setup lang="ts">
import moten from '@moten/ui'
import { ref } from 'vue'
const { MoImage } = moten

const width = ref('')
const changeWidth = () => {
  width.value = '500px'
}
</script>

<template>
  <div class="container" :style="{ width: width }">
    <mo-image
      src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
      @click="changeWidth"
    ></mo-image>
  </div>
</template>

<style scoped>
.container {
  container-type: inline-size;
  width: 100vw;
}
</style>
