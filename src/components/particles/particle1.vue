<script setup lang="ts">
import gsap from "gsap"
import { onMounted } from "vue";

const getParticles = () => {
  const array = [...Array(1000)].map((_, i) => {

    const randomNumber = Math.floor(Math.random() * 16777215).toString(16)
    return {
      // color: `rgb(${red},${green},${blue})`
      color: randomNumber.length < 6 ? `#0${randomNumber}` : `#${randomNumber}`
    }
  })
  console.log("array", array)
  return array
}


const particleAnimation = () => {

  //class名を変数に代入して変化に強くする
  const particle = ".dot"
  const greeting = ".greeting"

  //アニメーションの初期状態をセットする
  gsap.set([greeting], {
    opacity: 0
  });

  //タイムラインを使うと一連の流れをtoでつなげて登録出来る。
  const tl = gsap.timeline()
  tl.to(particle, {
    duration: 2, opacity: 0.1, stagger: {
      amount: 0.5,
      from: "start",
      ease: 'power4.inOut'
    }
  }).to(greeting, {
    duration: 3, opacity: 1, ease: "power4.inOut"
  });

};
onMounted(() => {

  // console.log(refTemp.value)
  particleAnimation()
})
</script>

<template>
  <h2 class="title">particles</h2>
  <div class="wrapper">

    <div v-for="p in getParticles()" class="dot" :style="{ 'background-color': p.color }" :key="p.color"></div>
    <h1 class="greeting">hello my Office</h1>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.dot {
  width: 20px;
  height: 20px;
  margin: 4px;
  border-radius: 10px;
}

.greeting {
  color: blue;
  position: absolute;
  left: 0;
  right: 0;
}
</style>