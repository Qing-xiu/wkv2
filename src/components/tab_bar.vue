<template>
	<footer class="footer">
	    <router-link to="/" class="footer-item" :class="{current: current == 'index'}">
	        <i class="iconfont">&#xe600;</i>
	        <div class="item-text">首页</div>
	    </router-link>
	    <router-link to="/my" class="footer-item" :class="{current: current == 'my'}">
	        <i class="iconfont">&#xe605;</i>
	        <div class="item-text">首页</div>
	    </router-link>
	</footer>
</template>

<script>
	export default {
		props: {
			current: {
				default: 'index'
			}
		}
	}
</script>

<style>
	@import "vars.css";

	.footer{
        position: absolute;
        z-index: 9;
        bottom:0px;
        left:0px;
        right: 0px;
        height: 98px;
        display: flex;
        align-items:center;
        background: #f7f7f8;
        border-top:1px solid #b2b2b2;

        .footer-item{
	        flex:1;
	        text-align: center;
	        &.current{
	            .iconfont{
	                color: $color_primary;
	            }
	            .item-text{
	                color: $color_primary;
	            }
	        }
	    }
	    .iconfont{
            font-size: 60px;
            color: #929292;
        }
        .item-text{
            font-size: 20px;
            color: #929292;
        }
    }
</style>