<template>
  <h-single-layout mode="middle" :width="1280">
    <h1 class="title">
      {{ msg }}
    </h1>
    <div class="img-container">
      <img src="/logo.png" alt="he3" />
    </div>
  </h-single-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = ref("Hello world, I am HE3");
</script>
<style scoped lang="less">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(-70deg, #8250df 0%, #d42a32 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
