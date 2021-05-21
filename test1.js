const _ = require("lodash");
const moment = require("moment");

let filters = {
  abc: "abc",
  xyz: "XYZ"
}
let tags = {
  abc: "abc",
  xyz: "XYZ",
  pqr: "PQR"
}

let match = _.every(filters, function(value, key){
  console.log("k=" + key + ",v=" + value);
  return tags[key] === value;
});

console.log("match=" + match);


