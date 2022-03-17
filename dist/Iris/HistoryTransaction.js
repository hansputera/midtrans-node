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
exports.historyTransaction = void 0;
const luxon_1 = require("luxon");
const IrisRequest_1 = require("../Util/IrisRequest");
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
const date = new Date();
const struDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    days: date.getDate(),
    _date: luxon_1.DateTime.now(),
};
const minusDate = (date, days) => {
    let minDate;
    if (!date)
        minDate = luxon_1.DateTime.now().minus({ days });
    else {
        minDate = luxon_1.DateTime.fromObject({
            year: date.year,
            month: date.month,
            day: date.days,
        });
    }
    const struMinDate = {
        year: minDate.toJSDate().getFullYear(),
        month: minDate.toJSDate().getMonth() + 1,
        days: minDate.toJSDate().getDate(),
        _date: minDate,
    };
    return struMinDate;
};
const plussDate = (date, days) => {
    let plusDate;
    if (!date)
        plusDate = luxon_1.DateTime.now().plus({ days });
    else {
        plusDate = luxon_1.DateTime.fromObject({
            year: date.year,
            month: date.month,
            day: date.days,
        }).plus({ days });
    }
    const struPlusDate = {
        year: plusDate.toJSDate().getFullYear(),
        month: plusDate.toJSDate().getMonth() + 1,
        days: plusDate.toJSDate().getDate(),
        _date: plusDate,
    };
    return struPlusDate;
};
const validDate = (d) => {
    const dateD = new Date();
    if (d.year !== dateD.getFullYear() || !/[0-9]/g.test(d.year.toString())) {
        throw new MidtransNodeError_1.default('Invalid year date');
    }
    const month = dateD.getMonth() + 1;
    if (d.month > month || !/[0-9]/g.test(d.month.toString()))
        throw new MidtransNodeError_1.default('Invalid Month date');
    else if (!/[0-9]/g.test(d.days.toString()))
        throw new MidtransNodeError_1.default('Invalid days date');
};
/**
 * @description Get a history transaction by date.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 * @param {IStatementDate?} fromDate date to start viewing transaction history.
 * @param {IStatementDate?} toDate the last date to get the transaction history.
 */
function historyTransaction(isProduction, token, fromDate, toDate) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!fromDate && !toDate) {
            fromDate = struDate;
            toDate = minusDate(struDate, 10);
        }
        else if (!fromDate) {
            fromDate = minusDate(toDate, 10);
        }
        else if (!toDate) {
            toDate = plussDate(fromDate, 10);
        }
        validDate(fromDate);
        validDate(toDate);
        if (!fromDate._date) {
            fromDate._date = luxon_1.DateTime.fromObject({
                year: fromDate.year,
                month: fromDate.month,
                day: fromDate.days,
            });
        }
        else if (!(toDate === null || toDate === void 0 ? void 0 : toDate._date)) {
            toDate._date = luxon_1.DateTime.fromObject({
                year: toDate === null || toDate === void 0 ? void 0 : toDate.year,
                month: toDate === null || toDate === void 0 ? void 0 : toDate.month,
                day: toDate === null || toDate === void 0 ? void 0 : toDate.days,
            });
        }
        // define iso time.
        const isoFromDate = fromDate._date.toISODate();
        const isoToDate = (_a = toDate === null || toDate === void 0 ? void 0 : toDate._date) === null || _a === void 0 ? void 0 : _a.toISODate();
        try {
            const { data } = yield (0, IrisRequest_1.irisRequest)(isProduction, token).get('/statements', {
                data: {
                    from_date: isoFromDate,
                    to_date: isoToDate,
                },
            });
            return data;
        }
        catch (e) {
            throw new MidtransNodeError_1.default(JSON.stringify((_b = e.response) === null || _b === void 0 ? void 0 : _b.data));
        }
    });
}
exports.historyTransaction = historyTransaction;
