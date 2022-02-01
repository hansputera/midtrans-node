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
exports.createTransaction = void 0;
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
const SnapRequest_1 = require("../Util/SnapRequest");
/**
 * @description create a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {SnapTransaction} args create transaction arguments.
 * @param {IConfig} cfg midtrans config
 */
function createTransaction(isProduction, args, cfg) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (args.item_details && Array.isArray(args.item_details)) {
                args.item_details = args.item_details.map((item) => (Object.assign(Object.assign({}, item), { quantity: item.quantity < 0 ? 1 : Math.floor(item.quantity), price: Math.floor(item.price) })));
            }
            const { data } = yield (0, SnapRequest_1.snapRequest)(isProduction, cfg.authKey).post('/transactions', args, {
                headers: cfg.overrideNotificationUrls
                    ? {
                        'X-Override-Notification': Array.isArray(cfg.overrideNotificationUrls)
                            ? cfg.overrideNotificationUrls.join(',')
                            : cfg.overrideNotificationUrls,
                    }
                    : {},
            });
            return data;
        }
        catch (e) {
            throw new MidtransNodeError_1.default(JSON.stringify((_a = e.response) === null || _a === void 0 ? void 0 : _a.data));
        }
    });
}
exports.createTransaction = createTransaction;
