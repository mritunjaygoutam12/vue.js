<template>

  <div id="flatd" :style="{width:rend,top:rendt}" @mouseover="mouseOver" @mouseleave="mouseLeave">
<div id="set">
<svg height="210" width="500" >
  <polygon points="6,50,6,190,25,70,6,50,25,70,70,50" style="fill:rgb(183, 255, 248);stroke:blue;stroke-width:0;fill-rule:nonzero;"/>
  Sorry, your browser does not support inline SVG.
</svg></div>
<div id="headi">
    
    <h1><img src="./assets/on.svg"/>  {{head}}</h1></div>
<div id="se">
<h4>Javascript</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:85%;border-radius:10%;"></div></div>
<h4>Vuejs</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:80%;border-radius:10%;"></div></div>
<h4>HTML & CSS</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:95%;border-radius:10%;"></div></div>
<h4>C</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:60%;border-radius:10%;"></div></div>
<h4>Nodejs</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:70%;border-radius:10%;"></div></div>
<h4>Go</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:60%;border-radius:10%;"></div></div>
<h4>Mysql</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:80%;border-radius:10%;"></div></div>
<h4>Sqlite</h4><div id="sk"><div style="background-color: rgb(183, 255, 248);height: 10px;width:80%;border-radius:10%;"></div></div>
</div>
  </div>
</template>
<script>
export default {
  data:function(){
      return{
          rend:"800px",
          rendt:"26px",
          body:"tesing body",
          head:"EXPERIENCES"
      }
  },
  methods:{
      mouseOver:function(){
                    this.rendt="30px"
      },
      mouseLeave:function(){
         
          this.rendt="26px"
      }
  }
}
</script>
<style scoped>
#flatd{
    
    background-color: white;   
border-radius: 8px;
width: 20px;
  -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
  position:relative;
  height:25%;
  margin-bottom: 20px;
  
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
    
}
#prodet{
    position: relative;
    left: 100px;
    top: -190px;
    margin-bottom: -15px;
}
#se{
    position: relative;
    top:-200px;
    left:100px;
}
h1{
    color:rgb(14, 232, 210);
}
#sk{
    background-color: rgb(211,211,211);
    width: 50%;
    height: 10px;
    position: relative;
    left:140px;
    top:-24px;
    border-radius: 10px;
margin: -6px;
}
</style>