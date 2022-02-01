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
exports.chargeTransaction = void 0;
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
const ApiRequest_1 = require("../Util/ApiRequest");
/**
 * @description Charge an unpaid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IChargeTransactionArgs} args Charge transaction arguments
 * @param {string} token midtrans auth key
 */
function chargeTransaction(isProduction, args, token) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data, } = yield (0, ApiRequest_1.apiRequest)(isProduction, 'v2', token).post('/charge', args);
            return data;
        }
        catch (e) {
            throw new MidtransNodeError_1.default(JSON.stringify((_a = e.response) === null || _a === void 0 ? void 0 : _a.data));
        }
    });
}
exports.chargeTransaction = chargeTransaction;
