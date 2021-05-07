"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const package_json_1 = require("../../package.json");
function ApiRequest(production, versionApi = "v2", token) {
    const baseURL = production ? "https://api.midtrans.com/" + versionApi : "https://api.sandbox.midtrans.com/" + versionApi;
    return axios_1.default.create({
        baseURL,
        headers: {
            "User-Agent": `Midtrans-Node/${package_json_1.version}`
        },
        auth: {
            username: token,
            password: ""
        }
    });
}
exports.default = ApiRequest;
