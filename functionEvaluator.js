const fs = require("fs");

let fnStr = fs.readFileSync("./myfunction.js");

console.log("f=" + fnStr);

let myfunction = new Function(fnStr);
//myfunction({aa:"AA",bb:"BB"});
let obj = {
  myfunction1: myfunction
}

obj["myfunction1"]({aa:"AA",bb:"BB"});