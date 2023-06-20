const fakeCallback = (url,success,failure)=>{
const delay = Math.floor(Math.random()*4500)+500;
console.log(delay)
setTimeout(()=>{
    if(delay>4000){
        failure('connection timeout :(')
    }
    else{
        success(`here is your data from ${url}`);
    }
},delay)
}
fakeCallback('books.com',(response)=>{
console.log("worked");
console.log(response);
},(err)=>{
    console.log("error");
    console.log(err);
})