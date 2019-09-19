"use strict";
exports.__esModule = true;
var App_1 = require("./App");
App_1["default"].express().listen(8000, function () {
    console.log('changement ici oui');
});
