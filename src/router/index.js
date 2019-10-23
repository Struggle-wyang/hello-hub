import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/public/header'
import wyang from '../wyang'
import model from '../VUE/model'
import data from '../VUE/data'
import Netease from '../VUE/Netease'
import zouma from '../VUE/zouma'
import success from '../VUE/success'
Vue.use(Router)

const router=new Router({
	base:process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
	  meta:{
	  	requireAuth:false
	  },
      component: HelloWorld
    },
    
  	{
  		path:'/wyang',
  		name:'wyang',
		meta:{
			requireAuth:false
		},
  		component:wyang
  		
  	},
	{
		path:'/model',
		name:'model',
		meta:{
			requireAuth:true
		},
		component:model
		
	},
	{
		path:'/data',
		name:'data',
		meta:{
			requireAuth:false
		},
		component:data
		
	},
	{
		path:'/Netease',
		name:'Netease',
		meta:{
			requireAuth:false
		},
		component:Netease
	},
	{
		path:'/success',
		name:'success',
		meta:{
			requireAuth:false
		},
		component:success
	},
	{
		path:'/zouma',
		name:'zouma',
		meta:{
			requireAuth:false
		},
		component:zouma
	}
    ],
    mode:'history'
});
router.beforeEach((to,from,next)=>{
	const isLogin = window.localStorage.getItem('ele_login')?true:false
	if(to.meta.requireAuth){
		isLogin?next():next('/Netease')
	}else{
		next();
	}
})

export default router;