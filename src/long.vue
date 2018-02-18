<template>

<div id="long" @mouseover="mouseOver" @mouseleave="mouseLeave" :style="{height:rendh,width:rend}" >
<div id="imgh">
     <div v-if="active">
    <img id="divforimg" src="./assets/mohit.jpg">
    </div>
     <div v-else>
    <img src="./assets/if_arrow_outline_5_342789.png">
    </div>
</div>
<div class="landscape" @click="changep">
   
    <img src="./assets/if_arrow_outline_5_342789.png">
    
</div>
<div v-html="leg" id="hf"></div>

</div>
</template>
  
<script>
export default {
    data:function(){
return{
    rend:"250px",
    rendh:"350px",
    leg:`<h3>Mritunjay</h3>
    <h3>Goutam</h3>
    `,
    active:true
}
    },
  methods:{
      mouseOver:function(){
      this.rend="270px";
      this.rendh="370px";
      this.leg=`
      <h1>Mritunjay</h1>
    <h1>Goutam</h1>`
      },
      mouseLeave:function(){
          this.rend="250px"
          this.rendh="350px";
          this.leg=`<h3>Mritunjay</h3>
    <h3>Goutam</h3>`
      },
      changep:function(){
          this.active=!this.active
      }
  }
}
</script>

<style>
#long{
    background-color: white;
         
 -webkit-box-shadow: 1px 1px 1px 1px #C0C0C0;
  -moz-box-shadow:    1px 1px 1px 1px #C0C0C0;  
  box-shadow:1px 1px 1px 1px#C0C0C0;
   border-radius: 8px;
   position:sticky;
   top:20px;
}
#imgh{
   width: 70%;
    height: 200px; 
    position: relative;
    left:10px;
   border-radius: 8px;
   top:18px;
   
}
#divforimg{
    border-radius:50%;
    -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -2px black;
}
#hf{
    position: relative;
    left:73px;
    top: 25px;
}

img {
    max-width: 100%;
    max-height: 100%;
    
}
img:hover{
     opacity: 0.3;
    filter: alpha(opacity=50);
}
.landscape {
    height: 30px;
    width: 80px;
    position: relative;
    left: 220px;
    top: -80px;
    border-radius: 70%;
   
}
h3{
    color:rgb(14, 232, 210);
}
h1{
    color:rgb(14, 232, 210);
}
</style>
