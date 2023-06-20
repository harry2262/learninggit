const fakePromise = (url) =>{
    return new Promise((resolve,reject)=>{
    const delay= Math.floor(Math.random()*4500)+500;
    setTimeout(() => {
        if(delay>4000){
            reject(`connection timeout(:`);
        }
        else{
            resolve(`here is your data from ${url}`);
        }
        
    }, delay);
}
    )
}
(fakePromise('hello'))
.then((res)=>{
    // console.log(this.delay);
    console.log(res);

    console.log("success");
    return fakePromise('google');
})   
.then((res)=>{
    console.log(res);

    console.log("success");
})
.catch((res)=>{
    console.log(res);
    console.log("error");
})

