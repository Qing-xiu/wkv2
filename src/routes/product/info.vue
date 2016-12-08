<template>
    <transition name="slide-in-left">
        <section class="page info-page">
            <header class="nav-bar">
                <router-link to="/" class="go-back"><i class="iconfont">&#xe601;</i></router-link>
                <router-link to="/" class="bar-item current">商品</router-link>
                <router-link to="/" class="bar-item">详情</router-link>
                <router-link to="/" class="bar-item">往期</router-link>
            </header>
            
            <div class="goods-panel">
                <div class="goods-img">
                    <img class="img" src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" alt="">
                </div>
                <div class="goods-title">
                    澳大利亚进口蜂蜜
                </div>
                <wk-progress :value="30" :max="100">期号：103907</wk-progress>

            </div>
        </section>
    </transition>
</template>

<script>
import WkProgress from 'components/ui/progress/index.vue'

export default {
    created () {
        console.log('created')
    },
    components: {
        WkProgress
    }
}
</script>

<style>
    @import "vars.css";
    @import "animate/slide_in_left.css";

    .info-page{
        .nav-bar{
            height: 90px;
            background: #fafafa;
            border-bottom: 1px solid #acacac;
            position: relative;
            text-align: center;
            font-size: 0px;
        }
        .bar-item{
            font-size: 32px;
            color: #999999;
            display: inline-block;
            height:86px;
            border-bottom: 4px solid #fafafa;
            line-height: 86px;
            padding: 0 2px;
            &:not(:last-child){
                margin-right: 45px;
            };
            &.current{
                border-bottom-color: #000
            }
        }
        .go-back{
            position: absolute;
            z-index: 9;
            left: 30px;
            top:  50%;
            transform: translate(0, -50%);
            
            .iconfont{
                color: $color_primary;
                font-size: 45px;    
            }
        }
        .goods-panel{
            padding: 0px 30px 30px 30px;
            background: #fff;
        }
        .goods-img{
            font-size: 0px;
            text-align: center;
        }
        .img{
            max-width: 100%;
        }
        .goods-title{
            color: #373737;
            font-size: 37px;
            margin: 20px 0;
        }
    }
</style>