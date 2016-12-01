<template>
  <transition name="fade" appear>
    <section v-if="visible" @click="handle" class="wk-mask"></section>
  </transition>
</template>

<script>
  export default {
    name: 'mask',
    data () {
      return {
        visible: true
      }
    },
    props: {
      clickFn: Function,
      clickClose: Boolean 
    },
    methods: {
      handle () {
        this.clickClose && this.close()
        this.clickFn && this.clickFn(this)
      },
      close () {
        this.visible = false
      }
    }
  }
</script>

<style>
  @import "animate/fade.css";
  
  .wk-mask{
    position:fixed;
    top:0px;
    bottom:0px;
    left:0px;
    right: 0px;
    background: rgba(0, 0, 0, .6);
  }
</style>