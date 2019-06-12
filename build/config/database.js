"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var path_1 = require("path");
var secrets_1 = __importDefault(require("../util/secrets"));
var parentDir = path_1.join(__dirname, '..');
exports.connectToDatabase = function (entitiesPath) {
    if (entitiesPath === void 0) { entitiesPath = null; }
    var path = entitiesPath || parentDir;
    var connectionOptions = {
        type: 'mysql',
        host: secrets_1.default.DB_HOST,
        port: Number(secrets_1.default.DB_PORT),
        username: secrets_1.default.DB_USERNAME,
        password: secrets_1.default.DB_PASSWORD,
        database: secrets_1.default.DB_DATABASE,
        entities: [
            path + "/entity/*{.ts,.js}",
        ],
        synchronize: true,
        logging: secrets_1.default.DB_LOGGING,
        dropSchema: secrets_1.default.DROP_SCHEMA,
    };
    return typeorm_1.createConnection(connectionOptions);
};
//# sourceMappingURL=database.js.map