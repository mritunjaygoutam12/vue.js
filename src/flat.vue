<template>

  <div id="flatd" :style="{width:rend,top:rendt}" @mouseover="mouseOver" @mouseleave="mouseLeave">
<div id="set">
<svg height="210" width="500" >
  <polygon points="6,50,6,190,25,70,6,50,25,70,70,50" style="fill:grey;stroke:blue;stroke-width:0;fill-rule:nonzero;"/>
  Sorry, your browser does not support inline SVG.
</svg></div>
<div id="headi">
    <h1>{{name}}</h1>
</div>
<div id="prodet">
<p>{{body}}
</p>
</div>

  </div>
</template>
<script>
export default {
    props: ["name","body"],
  data:function(){
      return{
          rend:"800px",
          
          rendt:"26px",
         // gsoc:"GSoC 2017"
      }
  },
  methods:{
      mouseOver:function(){
          
          //this.rendh="315px",
          this.rendt="30px"
      },
      mouseLeave:function(){
           //this.rendh="300px",
         // this.rend="850px",
          this.rendt="26px"
      }
  }
}
</script>
<style>
#flatd{
    
    background-color: white;
   position: relative;
   
border-radius: 8px;
 -webkit-box-shadow: 1px 1px 1px 1px #C0C0C0;
  -moz-box-shadow:    1px 1px 1px 1px #C0C0C0;  
  box-shadow:        1px 1px 1px 1px#C0C0C0;
}
#set{
    position: relative;
    top: -50px;
    left: -6px;
}
#headi{
    position: relative;
    top:-200px;
   
    left:65px;
    text-align: center;
    width:90%;
}
#prodet{
    position: relative;
    left: 100px;
    top: -190px;
}
</style>















