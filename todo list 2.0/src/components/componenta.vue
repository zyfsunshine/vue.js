<template>
<div class="hello">
  <h2> {{ msg}} </h2>
  <h2>{{msgfromfather}}</h2>
  <button v-on:click = "clickme">click</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
       msg:'hello，i am son'
    }
  },
  props:['msgfromfather'],
  methods:{
    clickme:function(){
      this.$emit('childsay',this.msg);
    }
  }

}
</script>
<style>

</style>


