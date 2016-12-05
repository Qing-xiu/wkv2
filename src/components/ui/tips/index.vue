<template>
  <transition name="slide-in-down" appear>
    <section v-if="visible" class="tips-sec">
      {{msg}}
    </section>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        visible: true
      }
    },
    props: {
      msg: String,
      duration: Number
    },
    mounted () {
      if (this.duration !== null) {
        setTimeout(() => {
          this.visible = false
        }, this.duration)
      }
    },
    methods: {
      close () {
        this.visible = false
      }
    }
  }
</script>

<style>
  @import "animate/slide_in_down.css";
  @import "vars.css";
  
  .tips-sec{
    position:fixed;
    z-index: 999999;
    top:0px;
    left:0px;
    right: 0px;
    background: #e64340;
    height: 70px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    @add-mixin font-dpr 30px;    
  }
</style>