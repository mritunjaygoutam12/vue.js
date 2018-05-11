<template>
  <div id="app">
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-4">
              <longdiv></longdiv>
            <icon></icon>
          </div>     
      <div>
<skill></skill>
<project></project>
          <about></about>
  </div>  
  </div></div></div>
</template>

<script>
  
  import dataot from './data.json'
  import divf from './app-support.vue'
  import longdiv from './long.vue'
  import icon from './icon.vue'
  import skill from './test.vue'
  import project from './project.vue'
  import contact from './contact.vue'
    import about from './aboutme.vue'

  
  var imp=document.body.clientWidth
  console.log(imp,"waiotzxlclxmlcmlxzmc")
  
 divf.data=function(){
return {
  write:we.view
}
  }
 
//console.log("mohitsingh1232")
export default {
  components:{
     'no':divf,
     'longdiv':longdiv,
     'icon':icon,
     'skill':skill,
     'project':project,
     'contact':contact,
'about':about
   },
  data:function(){
    return{
      seti:"os",
      view:we.view,
      titles:dataot.title,
      bodys:dataot.briefy,
      comshow:[],
      comments:{
        comment:""
      }
     // leng:this.comshow.length
    }
  },
  methods:{
  },
  beforeMount(){
    	this.showi()
    }
  
}
</script>

<style lang="scss">
#comment{
  position: sticky;
  margin-top: 40px;
  left:10px;
  margin-bottom: 10px;
}
#comment1{
  position: relative;
  margin-top: 20px;
  left:38px;top: 60px;
  margin-bottom: 10px;
}
.text{ 
background:white;
}

.os{
  position:sticky;
  height:120%;
  -moz-box-shadow:    1px 3px 5px 6px #ccc;
  -webkit-box-shadow: 1px 3px 5px 6px #ccc;
  box-shadow: 10px 5px 5px white;
}
</style>
