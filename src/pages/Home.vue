<template>
	<div class="wrapper">
		<div class="banner">
			<img src="../../static/image/banner.png" alt="banner">
		</div>
		<div class="info">
			<div class="value-container">
				<span class="value">{{info.points}} </span>积分
			</div>
			<div class="cash">提现</div>
		</div>
		<div class="list-item" v-for="item in items">
			<router-link :to="{name:'details',params:{obj:item}}">
				<Goods :msg="item"></Goods>
			</router-link>
		</div>
	</div>
</template>

<script>
	import Goods from "../components/Goods.vue"
	export default{
		name: 'Home',
		props: ['meta'],
		data(){
			return {
				info: {},
				items: [],
			}
		},
		components:{
			Goods,
		},
		mounted(){
			this.$axios('mall/item/list?limit=20').then(res =>{
				console.log(res);
				if(res.data.code === 1000){
					this.info = res.data.data;
					this.items = res.data.data.items;
				}
			}).catch(err =>{
				console.log(err);
			});
		},
		methods:{
			getUserInfo(){
				return this.$axios.get('mall/item/list?limit=20');
			},
			getUserInfo: function(){
				return this.$axios.get('mall/item/list?limit=20');
			},
			getGoodsItem: function(){
				return this.$axios.get('');
			},
		}
	}
</script>

<style lang="scss" scoped>
	.banner{
		img{
			width: 100%;
		}
	}
	.info{
		display: flex;
		justify-content: space-between;
	    padding: 0 10px;
	    margin-bottom: 10px;
	    height: 40px;
	    line-height: 40px;
	    overflow: hidden;
	    font-size: 14px;
	    color: #666666;
	    background-color: white;
	    border-bottom: 1px solid #DCDCDC;
	}
	.value{
		font-weight: bold;
		color: #FC535A;
	}
	.cash{
		display: inline-block;
	    width: 70px;
	    height: 20px;
	    line-height: 20px;
	    margin-top: 9px;
	    text-align: center;
	    border: 1px solid #ffbd48;
	    border-radius: 15px;
	    color: #ffbd48;
	}
	.list>.goods-item:nth-child(odd){
		border-right: 1px solid #DCDCDC;
	}
</style>