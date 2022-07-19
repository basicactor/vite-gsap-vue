<script setup lang="ts">
import gsap from "gsap"
import { onMounted, ref } from "vue";

// const refTemp = ref()



const loading1 = async () => {
  const barDuration = 0.2
  gsap.to("h2.title", { duration: 1, opacity: 0.3 });
  await gsap.to(".orange", { duration: barDuration, scale: 1.5 });
  gsap.to(".orange", { duration: barDuration, scale: 1 });
  await gsap.to(".grey", { duration: barDuration, scale: 1.5 });
  gsap.to(".grey", { duration: barDuration, scale: 1 });
  await gsap.to(".green", { duration: barDuration, scale: 1.5 });
  gsap.to(".green", { duration: barDuration, scale: 1 });
  await gsap.to(".yellow", { duration: barDuration, scale: 1.5 });
  gsap.to(".yellow", { duration: barDuration, scale: 1 });

};
onMounted(() => {

  // console.log(refTemp.value)
  loading1()
})
</script>

<template>
  <h2 class="title">gsap.to() Basic Usage</h2>
  <div class="wrapper">
    <div class="bar orange"></div>
    <div class="bar grey"></div>
    <div class="bar green"></div>
    <div class="bar yellow"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.bar {
  display: block;
  width: 5px;
  height: 50px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 10px;

  &.orange {
    background-color: orange;
  }

  &.grey {
    background-color: rgb(122, 119, 112);
  }

  &.green {
    background-color: green;
  }

  &.yellow {
    background-color: rgb(191, 223, 53);
  }
}
</style>