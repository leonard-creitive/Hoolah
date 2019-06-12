"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = __importDefault(require("./users"));
var api = function () {
    var router = express_1.Router();
    router.use('/users', users_1.default());
    return router;
};
exports.default = api;
//# sourceMappingURL=index.js.map