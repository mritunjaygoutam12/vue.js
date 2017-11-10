<template>
  <div id="app">
   
    <longdiv></longdiv>
    <divfora>
    </divfora>
    
  </div>
</template>

<script>
  
  import data from './data.json'
  import we from '../view.json'
  import divf from './app-support.vue'
  import longdiv from './long.vue'

 divf.data=function(){
return {
  write:we.view
}
  }
 
console.log("mohitsingh1232")
export default {
  components:{
     'no':divf,
     'longdiv':longdiv
   },
  data:function(){
    return{
      view:we.view
    }
  }
   
}
</script>

<style lang="scss">

</style>
