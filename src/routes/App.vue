<template>
    <transition name="fade">
        <section class="page index-page">
            <div class="content">
                <div class="card">
                    <a class="card-img">
                        <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" class="img" alt="">
                    </a>
                    <a class="card-title">澳大利亚进口蜂蜜</a>
                    <div class="card-cell">
                        <a class="cell-hd">
                            <wk-progress :value="30" :max="150"></wk-progress>
                        </a>
                        <div class="cell-ft">
                            <btn type="primary" size="secondary">立即参与</btn>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <a class="card-img">
                        <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" class="img" alt="">
                    </a>
                    <a class="card-title">澳大利亚进口蜂蜜</a>
                    <div class="card-cell">
                        <a class="cell-hd">
                            <wk-progress :value="30" :max="150"></wk-progress>
                        </a>
                        <div class="cell-ft">
                            <btn type="primary" size="secondary">立即参与</btn>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <a class="card-img">
                        <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" class="img" alt="">
                    </a>
                    <a class="card-title">澳大利亚进口蜂蜜</a>
                    <div class="card-cell">
                        <a class="cell-hd">
                            <wk-progress :value="30" :max="150"></wk-progress>
                        </a>
                        <div class="cell-ft">
                            <btn type="primary" size="secondary">立即参与</btn>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <a class="card-img">
                        <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" class="img" alt="">
                    </a>
                    <a class="card-title">澳大利亚进口蜂蜜</a>
                    <div class="card-cell">
                        <a class="cell-hd">
                            <wk-progress :value="30" :max="150"></wk-progress>
                        </a>
                        <div class="cell-ft">
                            <btn type="primary" size="secondary">立即参与</btn>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <a class="card-img">
                        <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" class="img" alt="">
                    </a>
                    <a class="card-title">澳大利亚进口蜂蜜</a>
                    <div class="card-cell">
                        <a class="cell-hd">
                            <wk-progress :value="30" :max="150"></wk-progress>
                        </a>
                        <div class="cell-ft">
                            <btn type="primary" size="secondary">立即参与</btn>
                        </div>
                    </div>
                </div>
            </div>
            
            <tab-bar></tab-bar>
        </section>
    </transition>
</template>

<script>
import Mask from 'components/ui/mask'
import Tips from 'components/ui/tips'
import Btn from 'components/ui/btn/index.vue'
import WkProgress from 'components/ui/progress/index.vue'
import TabBar from 'components/tab_bar.vue'

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
  },
  components: {
    Btn,
    WkProgress,
    TabBar
  }
}
</script>

<style>
@import "layout.css";
@import "reset.css";
@import "vars.css";
@import "iconfont.css";

.index-page{
    .card{
        background: #fff;
        padding: 0 30px 25px 30px;
        margin-bottom: 15px;
    }
    .card-img{
        font-size: 0px;
        text-align: center;
        .img{
            max-width: 100%;
        }
    }
    .card-title{
        font-size: 34px;
        color: #373737;
    }
    .card-cell{
        display: flex;
        align-items:center;
        margin-top: 20px;
    }
    .cell-hd{
        flex:1;
        margin-right: 48px;
    }
    .cell-ft{
        width: 200px;
    }
    .content{
        padding-bottom: 99px;
        box-sizing: border-box;
        height: 100%;
        overflow:auto;
        -webkit-overflow-scrolling: touch;
    }
}
</style>
