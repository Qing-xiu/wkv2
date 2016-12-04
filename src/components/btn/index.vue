<template>
	<a class="wk-btn" :class="{primary: type == 'primary', 'plain-primary': type == 'plain-primary', secondary: size == 'secondary'}">
		<slot>确认</slot>
	</a>
</template>

<script>
	export default {
		props: {
			type: {
				default: 'default', //'primary', 'plain-primary'
			},
			size: {
				default:'default', //'secondary'
			}
		}
	}
</script>

<style>
	.wk-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f3f3f3;

		font-size: 36px;
		color: #333;
		border: 1px solid #d7d7d7;
		height: 100px;
		border-radius: 50px;

		&.primary{
			background: #ff7f3a;
			color: #fff;
			border-color: #ff7f3a;
		}

		&.secondary{
			height: 90px;
		}
	}
</style>