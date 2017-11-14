<template>
  <div id="app">
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-4">
    <longdiv>
      </longdiv></div>
      
    <div class="col-sm-6"><flatdiv v-for="(title,i) in titles" :name="title" :body="bodys[i]"></flatdiv></div>
  </div>  
    </div>
  </div>
</template>

<script>
  
  import dataot from './data.json'
  import we from '../view.json'
  import divf from './app-support.vue'
  import longdiv from './long.vue'
  import flatdiv from './flat.vue'
  
  

 divf.data=function(){
return {
  write:we.view
}
  }
 
console.log("mohitsingh1232")
export default {
  components:{
     'no':divf,
     'longdiv':longdiv,
     'flatdiv':flatdiv
   },
  data:function(){
    return{
      view:we.view,
      titles:dataot.title,
      bodys:dataot.briefy
    }
  }
   
}
</script>

<style lang="scss">

</style>
