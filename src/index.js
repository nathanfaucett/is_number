var isObjectLike = require("is_object_like");


var objectNumberStr = "[object Number]",
    objectToString = Object.prototype.toString;


module.exports = function isNumber(obj) {
    return typeof(obj) === "number" || (isObjectLike(obj) && objectToString.call(obj) === objectNumberStr) || false;
};
