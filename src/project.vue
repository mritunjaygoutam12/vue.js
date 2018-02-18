<template>
  <div id="flat" :style="{width:rend,top:rendt}" @mouseover="mouseOver" @mouseleave="mouseLeave">
<div id="se">
<svg height="210" width="500" >
  <polygon points="6,50,6,190,25,70,6,50,25,70,70,50" style="fill:rgb(183, 255, 248);stroke:blue;stroke-width:0;fill-rule:nonzero;"/>
  Sorry, your browser does not support inline SVG.
</svg></div>
<div id="head">
      <h1><img src="./assets/on1.svg" style="color:grey;"/>  {{head}}</h1></div>
      <div id="u">
      <h4><a href="https://github.com/mritunjaygoutam12/mritunjaygoutam12.github.io" target="_blank">GSOC 2017</a></h4><div id="ska"><p>Mobile browser based 3D animation for representing altering position of vocal track.</p></div>
            <h4><a href="https://github.com/mritunjaygoutam12/fileapp_vuejs" target="_blank">Picbucket</a></h4><div id="ska"><p>Full stack web app with vuejs,veux,nodejs.</p></div>
                        <h4><a href="https://github.com/mritunjaygoutam12/vue_pwa" target="_blank">Vue pwa</a></h4><div id="ska"><p>pwa template with Offline cache loading with service worker</p></div>
                        <h4><a href="https://github.com/mritunjaygoutam12/vue.js" target="_blank">Portfolio</a></h4><div id="ska"><p>Vuejs based portfolio</p></div>
</div>
  </div>
</template>
<script>
export default {
  data:function(){
      return{
          rend:"800px",
          
          rendt:"26px",
          add:"<img src=\"./assets/on.svg\" />",
         // gsoc:"GSoC 2017"
         head:"Project"
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
#flat{
    
    background-color: white;   
border-radius: 8px;
width: 20px;
  -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
  position:relative;
      top: 100px;
        height:25%;
        
}
#se{
    position: relative;
    top: -50px;
    left: -6px;
}
#head{
    position: relative;
    top:-200px;
   
    left:65px;
    text-align: center;
    width:90%;
}
#prode{
    position: relative;
    left: 100px;
    top: -190px;
}#sk{
      
    width: 50%;
    height: 10px;
    position: relative;
    left:140px;
    top:-30px;
    border-radius: 10px;
}
#u{
    position: relative;
    top:-190px;
    left:90px;
}
a:link {
    color: black; 
    
    text-decoration: none;
}

a:visited {
    color: black;
    background-color: transparent;
    text-decoration: none;
}

a:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
}
</style>