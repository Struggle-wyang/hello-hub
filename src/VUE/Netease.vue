<template>
	<div>
		<el-container>
			<el-header>
				<div class="headerLogo">
					<img src="../assets/QQ图片20191015111340.png" />							
				</div>
				<p class="title">中文邮箱第一品牌</p>
				<div class="nav">
					<a href="#">企业邮箱</a><a href="#">VIP邮箱</a><a href="#">会员PLUS</a><a href="#">海外用户登录</a>
					<a href="#" class="you">邮箱大师</a><a href="#">帮助</a><a href="#">登录反馈</a>
				</div>
			</el-header>
			
			
			<el-main>
				<div class="inner">
					<a href="#"><img src="../assets/promPic.jpg"/></a>
					<div class="form">
						<div class="dingwei">
							<h2>邮箱账号登陆</h2>
							<div class="form-f">
							
								<el-input placeholder="邮箱账号或手机号码" prefix-icon="el-icon-user" v-model="input2" prop="username">
									<!-- <template slot="append">@163.com</template> -->
								</el-input><br /><br /><br />
								<el-input placeholder="请输入密码" v-model="input" show-password prefix-icon="el-icon-lock" prop="password"></el-input>	
								<el-checkbox v-model="checked">十天内免登录</el-checkbox>
								<a href="#" class="wang">忘记密码？</a>
							
								<el-button type="primary" @click = "loadXMLDoc()">登&nbsp;&nbsp;&nbsp;陆</el-button>	
								<a href="#" class="zhuce">注册新账号</a>
							</div>
							<div class="down">
								<img src="../assets/QQ图片20191016105116.png"/>
							</div>
						</div>	
					</div>
				</div>
			</el-main>
			
			
			<el-footer>
				<div class="footer-main">
					<div class="footer-nav">					
						<a href="#">网易首页</a><a href="#">&nbsp;&nbsp;&nbsp;网易严选</a><a href="#">&nbsp;&nbsp;&nbsp;网易有钱</a>
						<a href="#">&nbsp;&nbsp;&nbsp;政府公益热线</a><a href="#">&nbsp;&nbsp;&nbsp;隐私政策</a><a href="#">&nbsp;&nbsp;&nbsp;儿童隐私政策</a>				
					</div>
					<div class="footer-foo">
						<a href="#">网易公司版权所有©1997-2019</a><a href="#">&nbsp;&nbsp;&nbsp;ICP证粤B2-20090191</a><a href="#">&nbsp;&nbsp;&nbsp;粤公网安备 44010602000311</a>
						<span>（数据来源：艾媒邮箱报告）</span>
					</div>
				</div>
				
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
			input2:'',
			input: '',
			checked: true
			}
		},
		created(){
		},
		methods:{
			loadXMLDoc(){						            
				var vm = this;
				axios({
					url: 'https://234942d8-06a2-4cbf-b77f-b54344addf42.mock.pstmn.io/login',
					method: 'post', // 默认的
					data: {
						password: '111',
						name: '111'
					}
				}).then(function (response) {
					// console.log(response.data);
					var a = response.data[0];
					var b = response.data[1];
					// console.log(a);
					// console.log(vm.input);
					// debugger
					if(a == vm.input2 && vm.input == b){
						window.localStorage.setItem('ele_login',true);
						vm.$router.push('/model')
						// alert("登录成功！");
					}else{
						alert("登录失败！");
					}											
					// debugger;
				}).catch(function (error) {
					console.log(error);
				})
			}
		}
	}
	
</script>

<style>
	/* 全局样式 */
	*{
		margin: 0;
		padding: 0;
	}
	.clear{
		clear: both;
		height: 0;
		line-height: 0;
		overflow: hidden;
		font-size: 0;
	}
	ul,li,ol{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	input{
		outline: none;
	}
	
	body{
		color: #000000;
		/* background-color: #000; */
		font-size: 12px;
		/* line-height: 166.6%; */
		/* text-align: center; */
		display: block;
		width: 100%;
		/* height: 100px; */
	}
	div{
		display: block;
	}
	
	.headerLogo{
		position: absolute;
		top: 20px;
		left:40px;
		width: 144px;
		height: 32px;
	}
	.title{
		font-size: 16px;
		height: 30px;
		line-height: 30px;
		width: 156px;
		display: block;
		position: absolute;
		top: 20px;
		left: 204px;
		border-left: 1px solid #ccc;
		color: #888;
	}
	.nav{
		top: 27px;
		right: 40px;
		text-align: right;
		line-height: 17px;
		color: #666;
		font-size: 12px;
	}
	.nav a{
		color: #666;
		font-size: 12px;
		padding-left: 12px;
		display:inline-block;
		/* vertical-align: middle;/*锤子居住*/ 
		line-height: 70px;
	}
	.nav a:hover{
		color: #ce0326;
	}
	.nav .you:after{
		
	}
	
	.inner{
		width: 1100px;
		margin: 0 auto;
		clear: both;
		height: 640px;
		overflow: hidden;
		position: relative;
	}

	.inner a{
		/* position: absolute; */
		left: 0;
		top: 0;
		z-index: 2;
		cursor: pointer;
	}
	
	.form{
		width: 400px;
		height: 540px;
		position: absolute;
		/* position: relative; */
		top: 50px;
		right: 50px;
		z-index: 3;
		background-color: #fff;
		border-radius: 4px;
		border: #f1eff0 solid 1px;
	}
		
	.form h2{
		padding: 40px 0 0;
		color: #333;
		font-size: 20px;
		line-height: 28px;
		text-align: center;
	}
	
	.form-f{
		position: relative;
		padding: 32px 30px 0;
		height: 300px;
	}
	
	.dingwei{
		position: relative;
		width: 400px;
		height: 540px;
		overflow: hidden;
	}
	
	
	.el-input-group{
		margin-bottom: 20px;
		/* margin-top: 20px; */
	}
	.el-input-group__append{
		border-radius: 0;
	}
	.el-input__inner{
		height: 46px;
		/* padding-bottom: 20px; */
		line-height: 44px;
		border-radius: 0 !important;
		/* margin-top: 20px; */
	}
	
	.el-checkbox{
		color: #999;
		display: block;
		float: left;
		margin-top: 20px;
		
	}
		
	.wang{
		/* display: inline-block; */
		/* position: absolute; */
		color: #409eff;
		font-size: 14px;
		/* right: 30px; */
		float: right;
		margin-top: 20px;
	}
	
	.el-button{
		width: 340px;
		height: 50px;
		/* line-height: 50px; */
		font-size: 20px;
		margin-top: 20px;
	}
	
	
	.zhuce{
		width: 340px;
		
		display: inline-block;
		/* position: absolute; */
		margin-bottom: 0;
		float: left;
		margin: 20px auto 0;
		margin-left: 0;
		margin-right: 0;
		color: #409eff;
		font-size: 14px;
		/* left: 168px; */
		/* top: 100px; */
	}
	
	.down{		
		border-radius: 0 0 4px 4px;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 70px;
		background-color: #fafafa;
	}
	.down img{
		margin: 16px 30px 0;
	}
	
	
	
	
	
	.footer-main{
		height: 50px;
		
	}
	
	.footer-nav{
		height: 24px;
		width: 100%;
		line-height: 24px;
		font-size: 12px;
		color: #666;
		/* float: left; */
		text-align: center;
	}
	
	/* 布局样式 */
	
	.el-header{
		padding: 0 40px;
		height: 70px ! important;/*修改样式*/
		position: relative ;
		z-index: 2;
		overflow: hidden;
		background-color: #fff;
	}
	.el-header, .el-footer {
		/* background-color: #B3C0D1; */
		/* color: #333; */
		/* text-align: center; */
		/* line-height: 70px; */
	}
  
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
  
	.el-main {
		background-color: #fcfafb;
		color: #333;
		text-align: center;
		/* line-height: 160px; */
		width: 100%;
		padding: 0 !important;
	}
	
	.el-footer{
		padding: 50px 0 0;	
		height: 100px !important;
	}
	
	body > .el-container {
		margin-bottom: 40px;
	}
  
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
  
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
