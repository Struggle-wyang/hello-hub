<template>
	<div class="start">
	<div >

		<h1>{{ msg }}</h1>
		<h1>{{demo}}</h1>
		<h1>JavaScript 日期</h1>
		<p id="demo1"></p>		
		<p v-if="seen">现在你看到我了</p>		
		<h1>菜鸟教程</h1>
		<p>学的不仅是技术，更是梦想！</p>
		<p>哈哈哈，打字辛苦啊！！！</p>	
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'first',
	  data () {
		return {
		  msg: 'Welcome to Your Vue.js App',
		  demo:"JavaScript 注释",
		}
	  }
	}
</script>

    
<script>
	export default{
		name:'first',
	  el: '#app',
	  data: {
		seen: true,
		ok: true
	  }
	}
</script>

<style scope>

</style>
<style>

</style>

