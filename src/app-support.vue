<template>

<div id="divforall">
    <p>{{write}}</p>
</div>

</template>

<script>
export default {
    props:['<p>'],
    data:function(){
        return {
            write:"print it in compo"
        }
    }
}
</script>

<style>
#divforall{
   color: red;
    width: 300px;
    height: 100px;
   border-left: 6px solid blue;
    background-color: lightgrey;
    position: 20px 20px 20px 20px;
}
</style>
