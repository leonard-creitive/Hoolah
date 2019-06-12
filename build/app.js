"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var secrets_1 = __importDefault(require("./util/secrets"));
var api_1 = __importDefault(require("./api"));
// Create Express server
var app = express_1.default();
// Express configuration
app.set('port', secrets_1.default.PORT);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.get('/blah', function (req, res) {
    res.json({ hello: 'World!' });
});
app.use('/api', api_1.default());
app.use(express_1.default.static('public'));
exports.default = app;
//# sourceMappingURL=app.js.map