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
exports.listBeneficiaries = void 0;
const IrisRequest_1 = require("../Util/IrisRequest");
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
/**
 * @description get beneficiaries list.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {?number} limit how much data you want to retrieve?
 * @param {string} token midtrans server key
 */
function listBeneficiaries(isProduction, limit = 0, token) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield (0, IrisRequest_1.irisRequest)(isProduction, token).get('/beneficiaries');
            return data.splice(0, limit);
        }
        catch (e) {
            throw new MidtransNodeError_1.default(JSON.stringify((_a = e.response) === null || _a === void 0 ? void 0 : _a.data));
        }
    });
}
exports.listBeneficiaries = listBeneficiaries;
