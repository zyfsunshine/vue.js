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
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      title:"This is a todo list.",
      items:[
        {
          listname:"work",
          isfinished:false
        },
        {
          listname:"study",
          isfinished:true
        }
         ],
        newlistname:''
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
    }
 }
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
