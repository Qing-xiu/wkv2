<template>
	<div class="wk-progress">
		<div class="progress-hd" :style="{marginLeft: percent}">{{value}}</div>
		<div class="bar">
			<div :style="{width: percent}" class="bar-current"></div>
		</div>
		<div class="progress-hint">
			<div class="hint-hd"><slot></slot></div>
			<div class="hint-ft">满{{max}}次开奖</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'progress',
		props: {
			max: Number,
			value: Number
		},
		computed: {
			percent () {
				return this.value / this.max * 100 + '%'
			}
		}
	}
</script>

<style>
	.wk-progress{
		font-size: 0px;

		.progress-hd{
			display: inline-block;
			text-align: center;
			background: #ffc445;
			font-size: 18px;
			color: #333;
			line-height: 32px;
			border-radius: 32px;
			padding: 0 22px;
			position: relative;
			transform: translate(-50%, 0);
			margin-bottom: 9px;
			&:after{
				content: '';
				position: absolute;
				left:50%;
				transform: translate(-50%, 0);
				bottom: -7px;
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 7px 7.5px 0 7.5px;
				border-color: #ffc445 transparent transparent transparent;
			};
		}
		.bar{
			height: 13px;
			background: #eaeaea;
			border-radius: 13px;
			position: relative;
		}
		.bar-current{
			position: absolute;
			left:0px;
			top:0px;
			height: 100%;
			z-index:9;
			background: #ffc445;
			border-radius: 13px;
		}
		.progress-hint{
			display: flex;
			align-items:center;
			margin-top: 10px;
		}
		.hint-hd{
			flex:1;
			font-size: 16px;
			color: #676666;
		}
		.hint-ft{
			color:#bbb;
			font-size: 16px;
		}
	}
</style>