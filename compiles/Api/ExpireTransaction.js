"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expireTransaction = void 0;
const ApiRequest_1 = require("../Util/ApiRequest");
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
/**
 * @description Make an expire unpaid transaction.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
function expireTransaction(isProduction, orderID, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield (0, ApiRequest_1.apiRequest)(isProduction, 'v2', token).post(`/${orderID}/expire`);
            return data;
        }
        catch (e) {
            throw new MidtransNodeError_1.default(JSON.stringify(e.response.data));
        }
    });
}
exports.expireTransaction = expireTransaction;
