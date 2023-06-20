// const { rejects } = require("assert");


// async functions always rweturn a promise
async function hello(){

}
// arrow async function
const sing = async()=>{
return 'lalala'
} 
sing().then((data)=>{
    console.log(`promise resolved with ${data}`);
})
// we can throw ereors
const singu = async()=>{
    throw new Error("uh oh"); 
    return 'lalala';
    } 
const delayedcolorchange = (color,delay)=>{
   return new Promise((resolve,reject) =>{ setTimeout(() => {
        document.body.style.backgroundColor  =color;
        resolve();
    }, delay);})
}
async function rainbow(){
    await delayedcolorchange('red',1000);
    await delayedcolorchange('orange',1000);
    await delayedcolorchange('teal',1000);
    await delayedcolorchange('purple',1000);
    await delayedcolorchange('brown',1000);
    await delayedcolorchange('violet',1000);
    await delayedcolorchange('indigo',1000);
    await delayedcolorchange('blue',1000);
    rainbow();

}
// rainbow();    
     
