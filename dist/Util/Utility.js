"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidtransUtility = void 0;
const crypto_1 = __importDefault(require("crypto"));
/**
 * @class MidtransUtility
 */
class MidtransUtility {
    /**
     * Generate signature key.
     * @flow SHA512(ORDER_ID + STATUS_CODE + GROSS_AMOUNT + AUTH_KEY)
     *
     * @param {string} orderId Order ID
     * @param {string} statusCode Status Code
     * @param {string} grossAmount Gross amount
     * @param {string} authKey Midtrans server key
     * @return {string} Hex string.
     */
    static generateSignatureKey(orderId, statusCode, grossAmount, authKey) {
        if (typeof statusCode !== 'string' || typeof grossAmount !== 'string') {
            throw new TypeError('Status Code, and Gross Amount must be a string!');
        }
        else if (typeof authKey !== 'string') {
            throw new TypeError('The authKey must be a string!');
        }
        return crypto_1.default
            .createHash('sha512')
            .update(`${orderId}${statusCode}${grossAmount}${authKey}`)
            .digest('hex');
    }
}
exports.MidtransUtility = MidtransUtility;
