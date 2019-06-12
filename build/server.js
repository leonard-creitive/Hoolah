"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("./app"));
var database_1 = require("./config/database");
/**
 * Start Express server.
 */
exports.httpServer = http_1.default.createServer(app_1.default);
// graphqlServer.installSubscriptionHandlers(httpServer);
var server = exports.httpServer.listen(app_1.default.get('port'), function () {
    database_1.connectToDatabase();
    console.log('🚀 App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));
});
exports.default = server;
//# sourceMappingURL=server.js.map