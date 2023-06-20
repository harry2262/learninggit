const capitilize = (s)=>{
    let a = s[0];
    a=a.toUpperCase();
    s = s.slice(1);
    console.log(a);   
}
capitilize("hello")
// array methods

// forEach method
nums = [1,2,3,4,5,6]
nums.forEach((el)=>console.log(el));


// maPS - CREATE A new array
const nums2 = nums.map((el)=>{
   return el*2;
})
console.log(nums2)