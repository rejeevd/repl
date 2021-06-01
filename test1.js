const _ = require("lodash");
const moment = require("moment");

console.log(moment().subtract(1, 'weeks').startOf('week').valueOf());
console.log(moment().subtract(1, 'weeks').endOf('week').valueOf());


