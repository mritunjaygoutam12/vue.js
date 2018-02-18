<template>

  <div id="fla" :style="{width:rend,top:rendt}" @mouseover="mouseOver" @mouseleave="mouseLeave">
<div id="set">
<svg height="210" width="500" >
  <polygon points="6,50,6,190,25,70,6,50,25,70,70,50" style="fill:rgb(183, 255, 248);stroke:blue;stroke-width:0;fill-rule:nonzero;"/>
  Sorry, your browser does not support inline SVG.
</svg></div>
<div id="headi">
      <h1><i class="fa fa-hand-o-right" style="font-size:48px;color:rgb(14, 232, 210)"></i>
  {{head}}</h1></div>
      <div id="up">
      <h4></h4><div id="skae"><p>I am Mritunjay Goutam.Currently pursuing B.tech in Coumputer science and engineering from SMVDU,Katra,India.</p></div>
                <h4>Interest</h4><div id="skae"><p>Making API and Frontend development</p></div><br><br><br>
                                <h4>Contact Me</h4><div id="skae">
                                   <a href="https://github.com/mritunjaygoutam12/" target="_blank"> <i class="fa fa-github" style="font-size:48px;color:rgb(14, 232, 210)"></i></a>
                               <a href="https://twitter.com/Mohitsi76464546" target="_blank"> <i class="fa fa-twitter" style="font-size:48px;color:rgb(14, 232, 210)"></i></a>
                               <a href="https://www.linkedin.com/in/mritunjay-goutam-2a64a0131/" target="_blank"> <i class="fa fa-linkedin" style="font-size:48px;color:rgb(14, 232, 210)"></i></a>
                               <a href="https://www.facebook.com/mohitsingh2204" target="_blank"> <i class="fa fa-facebook" style="font-size:48px;color:rgb(14, 232, 210)"></i></a>

                                

</div>


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
         head:"About Me"
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
#fla{
    
    background-color: white;   
border-radius: 8px;
width: 20px;
  -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
  position:relative;
  margin-top: 20px;
  height:20%;
  margin-bottom: -40px;
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
}#skae{
      
    width: 50%;
    height: 10px;
    position: relative;
    left:140px;
    top:-15px;
    border-radius: 10px;
}
#up{
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