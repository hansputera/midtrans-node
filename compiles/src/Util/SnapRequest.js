"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const package_json_1 = require("../../package.json");
function SnapRequest(production, token) {
    const baseURL = production ? "https://app.midtrans.com/snap/v1" : "https://app.sandbox.midtrans.com/snap/v1";
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
exports.default = SnapRequest;
