<template>
	<div class="goods-item">
		<img src="https://photo.l99.com/" :src="msg.image" alt="">
		<p class="goods-title">{{msg.name}}</p>
		<div class="goods-details">
			<div class="goods-value">{{msg.price}}</div>
			<div class="exchange-num">
				<span>{{msg.sale_num}}</span>
				人已兑换
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Goods',
		props: ['msg'],
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item{
		box-sizing: border-box;
		float: left;
		width: 50%;
		padding: 0 5px;
		border-bottom: 1px solid #dcdcdc;
		img{
			width: 168px;
			height: 168px;
		}
	}
	.goods-title{
		text-align: left;
	}
	.goods-details{
		display: flex;
    	justify-content: space-between;
	}
	.goods-value{
		font-size: 14px;
	    font-weight: bold;
	    color: #FC535A;
	}
</style>