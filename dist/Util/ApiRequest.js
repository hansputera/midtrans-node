"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRequest = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} versionApi API Version (2 or 1)
 * @param {string} token midtrans server key
 * @param {AxiosRequestConfig} options Axios options
 * @return {AxiosInstance}
 */
function apiRequest(production, versionApi = 'v2', token, options) {
    const baseURL = production
        ? `https://api.midtrans.com/${versionApi}`
        : `https://api.sandbox.midtrans.com/${versionApi}`;
    return axios_1.default.create(Object.assign(Object.assign({}, options), { baseURL, auth: {
            username: token,
            password: '',
        } }));
}
exports.apiRequest = apiRequest;
