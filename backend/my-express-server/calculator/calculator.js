const express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/",(req,res)=>{
    // res.send("<h1>hello<\h1>");
   var result  = Number(req.body.num1)+Number(req.body.num2);
   res.send(`the result is ${result}`);
    
});
app.listen(3000,()=>{
   console.log("hello from server port 3000");
})          