<template>
  <div id="app">
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-4">
    <longdiv>
      </longdiv></div>
      
    <div class="col-sm-8"><flatdiv v-for="(title,i) in titles" :name="title" :body="bodys[i]"></flatdiv>
    </div>   <p>sndzlnvslnvlkfsncv klsnc vlksnfcv knsfckvlnfscvkn</p>

    <div id="comment">
      <h1>comment</h1><hr><hr>
      <div ><textarea rows="4" cols="50" name="comment" class="text" form="usrform"  v-model="comments.comment">
Enter text here...</textarea></div>
      <button @click="submit" class="text">submit</button>
    </div><br>
    
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
     'flatdiv':flatdiv
   },
  data:function(){
    return{
      view:we.view,
      titles:dataot.title,
      bodys:dataot.briefy,
      comshow:[],
      comments:{
        comment:""
      }
    }
  },
  methods:{
    submit:function(){
     // console.log(this.comments.comment)
     this.$http.post('https://comment-c7d54.firebaseio.com/comments.json',this.comments)
      .then(Response =>{
        console.log(Response);
        this.showi();
      },
        error =>{
          console.log(error);
      });
     // this.t=0;
    // this.showi();
    },
    showi:function(){
       this.$http.get('https://comment-c7d54.firebaseio.com/comments.json')
      .then(Response =>{
          return Response.json();
      })
      .then(data => {
        console.log(data)
        const dataconv=[];
        for(let key in data){
          dataconv.push(data[key]);
        }
        this.comshow=dataconv;
      })
      ;
     
    }
  }
  
}
</script>

<style lang="scss">

#comment{
  position: relative;
  margin-top: 20px;
  left: 80px;
  margin-bottom: 10px;
}
.text{ 
background:#DCDCDC;
}
</style>
