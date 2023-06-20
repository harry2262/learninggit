// const req = fetch('https://api.tvmaze.com/search/shows?q=girls');
// req.then(res=>{
//     console.log("RESPONSE",res);
//     return res.json();
// })
// .then(data=>{
//     console.log("data",data);
// })
// .catch(e=>{
//     console,log('oh error',e);
// })
 
const request = async ()=>{
   try{ const req = await fetch('https://api.tvmaze.com/search/shows?q=girls');
    const data = await req.json();
    console.log(data);}
    catch{
        console.log("error");
    }
}