<template>
	<div class="details-wrapper">
		<div class="goods-pic">
			<img :src="'https://photo.l99.com/'+this.$route.params.obj.image" alt="">
		</div>
		<div class="goods-info">
			<div class="name-price">
				<div class="name">{{this.$route.params.obj.name}}</div>
				<div class="price">{{this.$route.params.obj.price}}</div>
			</div>
			<div class="operate">
				<div class="operate-sub" @click="sub()">-</div>
				<div class="num">{{num}}</div>
				<div class="operate-add" @click="add()">+</div>
			</div>
		</div>
		<div class="goods-desc">
			<h5>商品简介:</h5>
			<div>{{this.$route.params.obj.detail}}</div>
		</div>
		<div class="tips">
			<h4>注意：</h4>
			<p>1、工作日内，订单提交后，原则上48个小时内处理完毕，周末和法定节假日，上班第一天处理</p>
	   		<p>2、涉及严重违规和被举报恶意骗人的行为，一经核实，兑换订单官方有权不予兑换，并将清空可兑换的积分</p>
	   		<p>特殊说明：被官方判断为违规或者欺诈行为的用户将会被封号，所有订单不可以兑换，请确确实实谨慎遵守以上规则，如有投诉，可联系床姐进行申诉</p>
		</div>
		<div class="footer">
			<div class="amount">需 <span>{{amount}}</span> 积分</div>
			<div class="btn">兑换</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Details',
		data(){
			return{
				num: 1,	
			}
		},
		computed:{
			amount(){
				return this.$route.params.obj.price * this.num;
			}
		},
		methods:{
			sub(){
				if(this.num>1){
					this.num --;
				}
			},
			add(){
				this.num ++;
			}
		}
	} 
</script>

<style lang="scss" scoped>
	.details-wrapper{
		padding-bottom: 60px;
		background-color: #F8F8F8;
		color: #333; 
	}
	.goods-pic{
		width: 100%;
		border-bottom: 1px solid #dcdcdc;
		img{
			width: 100%;

		}
	}
	.goods-info{
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		border-bottom: 1px solid #dcdcdc;
	}
	.operate{
		display: flex;
		align-items: center;
		[class^='operate-']{
			width: 24px;
			height: 24px;
			border-radius: 50%;
			background-color: #dcdcdc;
			color: white;
			text-align: center;
			line-height: 24px;
			font-size: 24px;
		}
		div{
			margin-right: 10px;
		}
	}
	.name{
		margin: 5px 0;
	    font-size: 18px;
	    font-weight: bold;
	}
	.price{
		text-align: left;
	    font-size: 20px;
	    font-weight: bold;
	    color: #FD5259;
	}
	.goods-desc{
		padding: 0 10px;
		text-align: left;
		line-height: 23px;
    	color: #666;
    	font-size: 14px;
    	border-bottom: 1px solid #dcdcdc;
	}
	h4{
		font-weight: bold;
		margin: 5px 0;
	}
	.tips{
		padding: 0 10px;
		text-align: left;
		font-size: 14px;
		p{
			margin-bottom: 10px;
			line-height: 23px;
    		color: #aaa;
		}
	}
	.footer{
		z-index: 99;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		height: 56px;
		line-height: 56px;
		background-color: white;
		.amount{
			font-size: 16px;
			span{
				color: #FD5259;
				font-weight: bold;
			}
		}
		.btn{
			width: 100px;
			height: 30px;
			margin: 13px 0;
			line-height: 30px;
			text-align: center;
			border-radius: 5px;
			background-color: #FD91A0;
			color: white;
			font-size: 16px;
		}
	}
</style>