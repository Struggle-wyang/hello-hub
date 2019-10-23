<template>
	<div class="wy_div">
		<el-container>
			<el-aside width="256px">
				<div class="logo">
					<i class="el-icon-platform-eleme"></i><span>LOGO</span>
				</div>
				<div class="cdl">
					<ul>
						<li><a href="#"><i class="el-icon-s-home"></i><span>数据源管理</span></a></li>
						<li><a href="#"><i class="el-icon-s-promotion"></i><span>指标库管理</span></a></li>
						<li><a href="#"><i class="el-icon-s-marketing"></i><span>Api模板</span></a></li>
					</ul>
				</div>
			</el-aside>
			<el-container>
				<el-header>
					<div class="header">
						<i class="el-icon-search"></i><i class="el-icon-bell"></i>
						<i class="el-icon-user-solid"></i><span>momo.zxy</span>
						<i class="el-icon-mobile-phone"></i>
					</div>
				</el-header>
				<el-main>					
					<div class="content">
						<!-- 单选框 -->
						<br />
						<div class="content_span">
							<span>源名称:</span>										
							<el-input v-model="input" placeholder="请输入"></el-input>
							<!-- 选择器 -->
							<span>来源类别:</span>
							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<!-- 按钮 -->
							<el-button type="info">查询</el-button>
							<el-button>重置</el-button>
					    </div>
						<br />
						<div class="zj">
							<el-button type="info" @click = "hreftwo">+&nbsp;新增源</el-button>
						</div>
						<!-- 表格 -->
						<br/>
						<el-table :data="tableData" style="width: 1072px" > 
							<el-table-column prop="a" label="序号" width="100"></el-table-column>							
							<el-table-column prop="b" label="源名称" width="134"></el-table-column>						
							<el-table-column prop="c" label="版本" width="100"></el-table-column> 
							<el-table-column prop="d" label="来源类别" width="134"></el-table-column> 
							<el-table-column prop="e" label="已关联指标" width="134"></el-table-column> 
							<el-table-column prop="f" label="更新时间" width="200"></el-table-column> 
							<el-table-column prop="g" label="更新人" width="134"></el-table-column> 
							<el-table-column prop="h" label="操作" width=""></el-table-column> 
						</el-table>
						<br/>
						<br/>
						<!-- 分页 -->
						<div>
							<span>共 400 条记录 第 1 / 80 页</span>
							<el-pagination 
								background 
								layout="prev, pager, next"
								:total="100">
							</el-pagination>
						</div>	
					</div>
					<router-view/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				input: '',
				
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
							
				tableData: [],
				
			}
		},
		// 加载界面
		created(){
			this.loadXMLDoc();
		},
		methods:{
			hreftwo(){
				this.$router.push({path:'/data'})
			},
			//Ajax
			loadXMLDoc()
			{
				
				var vm=this;
// 				var iable=new XMLHttpRequest();				
// 				iable.open("GET","https://234942d8-06a2-4cbf-b77f-b54344addf42.mock.pstmn.io/code",true);
// 				//iable.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");//控制返回类型				
// 				iable.send();
// 				iable.onreadystatechange=function(){			  
// 					if (iable.readyState==4 && iable.status==200){	
// 						// debugger;
// 						var a=iable.responseText;//返回字符串						
// 						var tableData = eval(a);
// 						vm.tableData=tableData;
// // 						var buildDdata=[]
// // 						for(var i = 0;i<tableData.length;i++){
// // 							arr[i] = hang[i].value;
// // 						}
// 					}
// 				}
				// 创建axios
// 				const instance = axios.create({
// 					method: 'get',
// 				    baseURL: 'https://234942d8-06a2-4cbf-b77f-b54344addf42.mock.pstmn.io/code',
// 
// 				});
// 				instance.interceptors.response.use(
// 					response => {  // 该处为后端返回整个内容
// 						const res = response.data;  // 该处可将后端数据取出，提前做一个处理
// 						
// 						if ('正常情况') {
// 							return response  // 该处将结果返回，下一步可用于前端页面渲染用
// 						} else {
// 							alert('该处异常');
// 							return Promise.reject('error')
// 						}
// 						debugger;
// 					}
// 				)
		
// 				// 请求
// // 				axios.get('/user?ID=12345').then(function (response) {					
// // 					console.log(response);}).catch(function (error) {										
// // 					console.log(error);
// // 				});

					
					axios({
						url: 'https://234942d8-06a2-4cbf-b77f-b54344addf42.mock.pstmn.io/code',
						method: 'get',
						responseType: 'stream', // 默认的
					}).then(function (response) {
						console.log(response);
						console.log(response.data);
						var a = response.data;
						var b = eval(a);
						vm.tableData=b;
						debugger;
						
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
		margin: 0;/*清除标签自带内外边距*/
		padding:0;
	}
	.clear{
		clear: both; /*清除浮动*/
		height: 0;   /*标签高度为0*/
		line-height: 0;   /*文本行高为0*/
		overflow: hidden; /*超出隐藏*/
		font-size:0; /*字体大小为0*/
	}
	ul,li,ol{
		list-style: none;/*消除列表默认风格*/
	}
	a{
		text-decoration: none;/*去掉下划线*/
	}
	input{
		outline:none;/*去掉文本框的原有造型*/
	}
	body{
		margin: 0 auto;
		background-color: #333333;
		position: relative;
	/* 	margin: 0px;
		
		background-image: none;
		position: relative;
		left: -122px;
		width: 3413px;
		margin-left: auto;
		margin-right: auto;
		text-align: left; */
	}
	.wy_div{
		position: absolute;
		/* left: 0px; */
		/* top: 60px; */
		width: 100%;
	}
	.el-header, .el-footer {
		/* background-color: #B3C0D1; */
		background-color: #fff;
		color: #333;
		text-align: center;
		line-height: 60px;
    }
  
    .el-aside {
		/* background-color: #D3DCE6; */
		background-color: #fff;
		color: #333;
		text-align: center;
		line-height: 200px;
		width: 256px;
    }
  
    .el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		/* line-height: 160px; */
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
	
	
	/* logo样式 */
	.logo{
		width: 100%;
		height: 60px;
		border-bottom: #D3DCE6 1px solid;
		background-color: #fff;
		text-align: left;
		line-height: 65px;
		/* margin-top: 20px; */
	}
	.el-icon-platform-eleme{
		font-size: 32px;
		margin-left: 30px;
		
	}
	.logo span{
		color: #404040;
		font-size: 18px;
		font-weight: 650;
		/* text-align: left; */
		margin-left: 10px;
		/* margin-top: 6px; */
	}
	/* 菜单栏 */
	.cdl{
		margin-top: 10px;
		text-align: left;
	}
	.cdl ul li{
		height: 54px;
		background-color: #fff;
		line-height: 54px;
	}
	.cdl a{
		font-family: 'PingFangSC-Regular', 'PingFang SC';
		font-size: 14px;
		color: #000000a5;
	}
	.cdl li i{
		margin-left: 30px;
		margin-right: 10px;
	}
	.cdl li:hover{
		background-color: #e6f7ff;
		width: 254px;
		border-right: 2px #ccc solid;
	}
	/* heaer */
	.header{
		/* width: 1200px; */
		height: 60px;
		line-height: 60px;
		text-align: right;
		background-color: #fff;
	}
	.header span{
		margin-left: -30px;
	}
	.header i{
		margin-right: 30px;
		font-size: 24px;
	}
	.content{
		/* width: 1144px; */
		height: 848px;
		text-align: left;
		background-color: #fff;
		position: relative;
		padding: 30px 50px;
	}
	.content_span{
		/* position: absolute; */
		top:34px;
		left: 34px;
		font-size: 14px;
		color: #000000d8;
		font-weight: 400;
	}
	.el-input{
		width: 264px;
	}
	.el-input__inner{
		width: 264px;
		height: 32px;
		/* display: inline-block; */
	}
	.el-button el-button--info{
		width: 65px;
		height: 32px;
	}
	.zj{
		/* position: absolute; */
		top: 90px;
		left: 34px;
		flex: 2;
	}
	.el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition{
		/* position: absolute; */
		/* top: 500px; */
		/* margin-top: 500px; */
		/* width: 1072px; */
	}
</style>