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
exports.validateBankAccount = void 0;
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
const IrisRequest_1 = require("../Util/IrisRequest");
/**
 * @description Validate a bank account
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} bankName Bank name (e.g. BNI, BCA, etc..)
 * @param {string} bankAccountId A bank account id
 * @param {string} token midtrans server key
 */
function validateBankAccount(isProduction, bankName, bankAccountId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!/[A-z]/gi.test(bankName))
            throw new MidtransNodeError_1.default('Invalid Bank Name');
        else if (!/[0-9]/gi.test(bankAccountId))
            throw new MidtransNodeError_1.default('Invalid Bank account ID');
        try {
            const { data } = yield (0, IrisRequest_1.irisRequest)(isProduction, token).get(`/account_validation?bank=${encodeURIComponent(bankName)}&account=${bankAccountId}`);
            return data;
        }
        catch (e) {
            throw new MidtransNodeError_1.default(JSON.stringify(e.response.data));
        }
    });
}
exports.validateBankAccount = validateBankAccount;
