"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
if (process.env.NODE_ENV === 'test' && fs_1.default.existsSync('.env.test')) {
    console.log('Using .env.test file to supply config environment variables');
    dotenv_1.default.config({ path: '.env.test' });
}
else if (fs_1.default.existsSync('.env')) {
    console.log('Using .env file to supply config environment variables');
    dotenv_1.default.config({ path: '.env' });
}
var secrets = {
    ENVIRONMENT: process.env.NODE_ENV,
    prod: process.env.NODE_ENV === 'production',
    PORT: Number(process.env.PORT) || 8080,
    DB_HOST: process.env.DB_HOST,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT || 3306,
    DB_LOGGING: process.env.DB_LOGGING || false,
    DROP_SCHEMA: process.env.NODE_ENV === 'test',
    API_KEY: process.env.API_KEY,
    MEDIA_URL: process.env.MEDIA_URL,
    APP_URL: process.env.APP_URL,
};
exports.default = secrets;
//# sourceMappingURL=secrets.js.map