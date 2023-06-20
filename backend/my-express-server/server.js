const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    console.log(req);
    res.send("<h1>hello sohneyo</h1>");
})
// console.log("hello");
app.listen(3000,()=>{
    console.log('new server started at port 3000');
}); 