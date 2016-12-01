<template>
  <transition name="slide-in-left">
    <section class="page info-page">
      info-page
      <router-link to="/">回到首页</router-link>
    </section>
  </transition>
</template>

<script>
  export default {
    created () {
      console.log('created')
    }
  }
</script>

<style>
  @import "animate/slide_in_left.css";
</style>