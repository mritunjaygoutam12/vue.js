
/*var https=require('https')

var fs=require('fs')
 
var req=https.get('https://en.wikipedia.org/wiki/MS_Dhoni',function(res){
var resBody = "";
console.log("we get it")
console.log(`Server Satus:${res.statusCode}`);
//console.log("response headers:%j",res.headers);
res.setEncoding("UTF-8");
res.on("data",function(chunk){
    console.log("data come always in chunks");
    resBody+=chunk
})
res.on("end",function(){
    fs.writeFile("ms-dhoni.html",resBody,function(err){
        if(err){console.log("unable to write");}
        console.log("success")
    })
})
} )*/
var dat =require('./view.json')
var fs =require('fs')
var writ=dat.view;
writ++;
var mohit="mritunjay";
var wr={"view":writ}
fs.writeFile("view.json",JSON.stringify(wr, null, 4),function(err){
    if(err)console.log("check error")
})