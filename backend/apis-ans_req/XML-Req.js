const request = new XMLHttpRequest();

request.onload = ()=>{
  console.log("DONE!!");
  const data = JSON.parse(this.responseText);
  console.log(data.price);
}
request.onerror =()=>{
    console.log("ERROR!!");
}
request.open('GET',"reqaddrs");
request.open();