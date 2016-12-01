<template>
  <transition name="fade">
    <div class="page" id="app">
      <img src="../img/logo.png">
      <h1>{{ msg }}</h1>
      <div @click="showMask" class="demo">
        文字大小测试
      </div>
      <router-link to="/product/123">
        info
      </router-link>
    </div>
  </transition>
</template>

<script>
import Mask from 'components/mask'
import Tips from 'components/tips'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showMask () {
      Tips('请输入密码')
    }
  }
}
</script>

<style>
@import "layout.css";
@import "reset.css";
@import "vars.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo{
  width: 750px;
  height: 100px;
  background: #ccc;
  @add-mixin font-dpr 40px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
