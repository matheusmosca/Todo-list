"use strict";
exports.__esModule = true;
// import {Promise} from 'es6-promise'
var rxjs_1 = require("rxjs");
var basic = rxjs_1.Observable.create(function (observer) {
    observer.next("oi");
});
basic.subscribe(function (x) {
    console.log(x);
});
console.log("Test");
