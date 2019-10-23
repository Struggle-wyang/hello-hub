<template>
	<div id="app">
		<el-container>
		<el-header>
			<i class="el-icon-picture-outline"></i>
			<i class="el-icon-search"></i></i><i class="el-icon-close-notification"></i>
		</el-header>
		<el-container>
		<el-aside width="200px">
		<el-col :span="24">
		<el-menu text-color="black" active-text-color="#ffd04b">
			<el-menu-item index="1">
			<i class="el-icon-house"></i>
			<span slot="title">数据源管理</span>
		    </el-menu-item>
		    <el-menu-item index="2">
			<i class="el-icon-message"></i>
			<span slot="title">数据源管理</span>
		    </el-menu-item>
		    <el-menu-item index="3">
			<i class="el-icon-document"></i>
			<span slot="title">Api模板</span>
			</el-menu-item>
			</el-menu>
			</el-col>
		</el-aside>
		
		
		<el-main>
			<div class="main-top" style="min-width: 1200px;">
			源名称：<el-input class="shu" v-model="input" placeholder="请输入"></el-input>
			来源类别：<el-select v-model="value" placeholder="请选择">
			 <el-option
			  v-for="item in options"
			  :key="item.value"
			  :label="item.label"
			  :value="item.value">
			 </el-option>
		   </el-select>
			<el-button class="an1" type="info">查询</el-button>
			<el-button>重置</el-button>
			<br>
			<el-button class="an3" type="info">+新增源</el-button>
			</div>
			<div class="table">
				 <el-table
	  ref="singleTable"
	  :data="tableData"
	  highlight-current-row
	  @current-change="handleCurrentChange"
	  style="width: 100%">
	 <el-table-column
		type="index"
						label="序号"
		width="50">
	 </el-table-column>
	 <el-table-column
		property="date"
		label="源名称"
		width="120">
	 </el-table-column>
	 <el-table-column
		property="name"
		label="版本"
		width="120">
	 </el-table-column>
	 <el-table-column
		property="address"
		label="来源类别">
	 </el-table-column>
	 <el-table-column
		property="relevance"
		label="已关联指标"
		width="120">
	 </el-table-column>
	 <el-table-column
		property="time"
		label="更新时间"
		width="120">
	 </el-table-column>
	 <el-table-column
		property="man"
		label="更新人">
	 </el-table-column>
	 <el-table-column
		fixed="right"
		label="操作"
		width="100">
	  <template slot-scope="scope">
	  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
	   <el-button type="text" size="small">编辑</el-button>
	   </template>
	 </el-table-column>
	 </el-table>
				   <div class="block">
		 <span class="demonstration">完整功能</span>
		 <el-pagination
		 @size-change="handleSizeChange"
		 @current-change="handleCurrentChange"
		 :current-page="currentPage4"
		 :page-sizes="[100, 200, 300, 400]"
		 :page-size="100"
		 layout="total, sizes, prev, pager, next, jumper"
		 :total="400">
		 </el-pagination>
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
			tableData: [{
			    date: '发票数据',
			    name: 'V1.0',
			    address: 'Api',
				relevance:'1',
				time:'2019-10-9',
				man:'蔡徐坤'
			}, {
				date: '发票数据',
				name: 'V1.0',
				address: 'Api',
				relevance:'1',
				time:'2019-10-9',
				man:'蔡徐坤'
			}, {
			    date: '发票数据',
			    name: 'V1.0',
			    address: 'Api',
				relevance:'1',
				time:'2019-10-9',
				man:'蔡徐坤'
			}, {
			    date: '发票数据',
			    name: 'V1.0	',
			    address: 'Api',
				relevance:'1',
				time:'2019-10-9',
				man:'蔡徐坤'
			}],
			currentRow: null
		  }
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			setCurrent(row) {
				this.$refs.singleTable.setCurrentRow(row);
		    },
		    handleCurrentChange(val) {
				this.currentRow = val;
		    }
			}
		}
</script>

<style>

	.el-header{
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: left;
	    line-height: 60px;
	  }
	  
	  .el-aside {

	    color: #333;
	    text-align: left;
	    line-height: 500px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: left;
	    height: 1000px;
			top:
	  }
		.shu{
			width: 350px;
		}
		.shu2{
			width: 350px;
		}
		.an1{
			margin-left: 50px;
		}
		.an3{
			margin-top: 30px;
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



