import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//点击哪个显示哪个。
const frist ={template: '<div>frist内容</div>'}
const second ={template: '<div>second内容</div>'}
const home ={template: '<div>home内容</div>'}
const abc={
	template:`
		<div>
		<h2>组件</h2>
		<router-view class="rout"></router-view>
		</div>
	`
}
const firfrist={
	template: '<div>我是子路由yi</div>'
}
const firsecond={
	template: '<div>我是子路由er</div>'
	
}
//定义的整个路由
const router=new VueRouter({
	mode:'history',
	base:__dirname,//基础路径为当前路径
	routes:[           //使用数组形式
		{
			path:'/',
			name:'home',
			component:home
		},
		{
			path:'/frist',
			component:abc,
		        children:[
			    {
			    	path:'/',
			    	name:'home-frist', 
			    	component : frist
			    },
			   {
			   	    path:'frist',
			   	    name:'home-frist-1',
			   	    component : firfrist
			   	},
			   {
			   		path:'second',
			   		name:'home-frist-2', 
			   		component : firsecond
			   	},
		        ]
	    },

		{
			path:'/second',
			name:'home-second',
			component:second
		},
	]
})
new Vue({
	router,
	template:`
		<div id="r">
			<h1>导航</h1>
			<p>{{$route.name}}</p>
			<ol>
				<li><router-link to="/">home</router-link></li>
				<li><router-link to="/frist">frist</router-link></li>
					<ul>
						<li><router-link to="/frist/frist">frist</router-link></li>
						<li><router-link to="/frist/second">second</router-link></li>
					</ul>
				<li><router-link to="/second">second</router-link></li>
			</ol>
			<router-view class="rout"></router-view>
		</div>`
		
}).$mount('#app')

export default router