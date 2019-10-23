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
						<!-- 导航栏 -->
						<!-- <br /> -->
					    <div class="dh">
							<ul>
								<li><a href="#">Api</a></li>
								<li><a href="#">数据库</a></li>
								<li><a href="#">Excel</a></li>
								<li><a href="#">ERP</a></li>
								<li><a href="#">分布式存储</a></li>
							</ul>
						</div>
						<!-- 表单 -->
						
						<div class="form_div">
							<h2><span>新增源</span></h2>
							<el-form ref="form" :model="form" label-width="80px">
								<el-form-item label="活动名称"><br />
									<el-input v-model="form.name"></el-input>
								</el-form-item>
								<el-form-item label="活动区域"><br />
									<el-select v-model="form.region" placeholder="请选择活动区域">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="活动区域"><br />
									<el-select v-model="form.region" placeholder="请选择活动区域">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
								<div class="sl">
										<p><span>jason示例</span></p>
										<p><span>@requires_authorization</span></p>
										<p><span>def somefunc(param1='', param2=0):</span></p>
										<p><span>    '''A docstring'''</span></p>
										<p><span>    if param1 > param2: # interesting</span></p>
										<p><span>        print 'Greater'</span></p>
										<p><span>    return (param2 - param1 + 1) or None</span></p>
										<p><span>class SomeClass:</span></p>
										<p><span>    pass</span></p>
										<p><span>>>> message = '''interpreter</span></p>
										<p><span>... prompt'''</span></p>
								</div>
								
								
								<el-form-item label="活动形式">
									<el-input type="textarea" v-model="form.desc"></el-input>
								</el-form-item>
								
								<el-button>取消</el-button>
								<el-button type="primary" @click = "hrefone">确定</el-button>
							</el-form>
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
		  return {
			form: {
			  name: '',
			  region: '',
			  date1: '',
			  date2: '',
			  delivery: false,
			  type: [],
			  resource: '',
			  desc: ''
			}
		  }
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},		
			hrefone(){
				this.$router.push({path:'/model'})
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
		left: 222px;
		top: 60px;
		width: 100%;
		height: 955px;
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
		width: 1144px;
		height: 848px;
		text-align: left;
		background-color: #fff;
		position: relative;
	}
	.dh{
		position: absolute;
		left:0px;
		top: 10px;
		width: 208px;
		height: 826px;
		border-right:1px #ebebeb solid ;
	}
	.dh li{
		width: 208px;
		height: 46px;
		line-height: 46px;
		font-size: 14px;
	}
	.dh li a{
		margin-left: 20px;
	}
	.dh li:hover{
		width: 204px;
		background-color: #e6f7ff;
		/* font-style:#e6f7ff ; */
		border-right: 4px #1890FF solid;
	}
	.dh li a:hover{
		color:#1890FF;
	}
	.form_div{
		width: 500px;
		height: 835px;
		position: absolute;
		left: 209px;
	}
	.sl{
		width: 300px;
		height: 200px;
	}
</style>