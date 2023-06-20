const btn = document.querySelector('#v1');
var r = Math.ceil(255*(Math.random()))
var g = Math.ceil(255*(Math.random()))
var b = Math.ceil(255*(Math.random()))

// const colorChanger= ()=>{
//     document.body.style.background = 'magenta';
// }
// // console.log(r,g,b)
btn.addEventListener('click',()=>{
    var r = Math.ceil(255*(Math.random()))
var g = Math.ceil(255*(Math.random()))
var b = Math.ceil(255*(Math.random()))
    console.log(r,g,b);
    h.innerText = `rgb(${r},${g},${b})`;
    document.body.style.background = `rgb(${r},${g},${b})`;
});
const h = document.querySelector("h1");

