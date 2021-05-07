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
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
const IrisRequest_1 = __importDefault(require("../Util/IrisRequest"));
function ValidateBankAccount(isProduction, bankName, bankAccountId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!/[A-z]/gi.test(bankName))
            throw new MidtransNodeError_1.default("Invalid Bank Name");
        else if (!/[0-9]/gi.test(bankAccountId))
            throw new MidtransNodeError_1.default("Invalid Bank account ID");
        try {
            const { data } = yield IrisRequest_1.default(isProduction, token).get(`/account_validation?bank=${encodeURIComponent(bankName)}&account=${bankAccountId}`);
            return data;
        }
        catch (e) {
            throw new MidtransNodeError_1.default(e.response.data);
        }
    });
}
exports.default = ValidateBankAccount;
