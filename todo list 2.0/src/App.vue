<template>
  <div id="App">
    <h2 v-text="title"></h2>
    <input v-model="newlistname" v-on:keyup.enter="addlistname">
    <ul>
      <li v-for="item in items" :key='item' v-bind:class="{finished:item.isfinished}"
      v-on:click="yornfinish(item)" >{{item.listname}}
        <!-- 单个项的listname -->
      </li>
    </ul>
    <p>son say：{{childwords}}</p>
    <componenta msgfromfather='you die' v-on:childsay='listenson'></componenta>
    <!-- 以上这一句是父组件监听子组件childsay事件。如果监听到在子组件中触发了，
    那么就发生listenson事件 -->
  </div>
</template>

<script>
import Store from './store'
import componenta from './components/componenta'
export default {
  name: 'App',
  data(){
    return{
      title:"This is a todo list.",
      items:Store.fetch(),
        newlistname:'',
        childwords:'',
        }
},
components:{componenta},
watch:{
  items:{
    handler:function(items){
      Store.save(items)
    },
    deep:true
  }
},

 methods:{
    yornfinish:function(item){
    item.isfinished=!item.isfinished;
    },
    addlistname:function(){
      this.items.push({
        listname:this.newlistname,
        isfinished:false
      })
      this.newlistname=''

    },
    listenson:function(msg){
this.childwords=msg
    }
 },

}
</script>

<style>
.finished{
  text-decoration: underline;
  color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
