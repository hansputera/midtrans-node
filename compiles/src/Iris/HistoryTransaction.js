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
const luxon_1 = require("luxon");
const IrisRequest_1 = __importDefault(require("../Util/IrisRequest"));
const MidtransNodeError_1 = __importDefault(require("../Util/MidtransNodeError"));
const date = new Date();
const struDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    days: date.getDate(),
    _date: luxon_1.DateTime.now()
};
const minusDate = (date, days) => {
    let minDate;
    if (!date)
        minDate = luxon_1.DateTime.now().minus({ days });
    else
        minDate = luxon_1.DateTime.fromObject({ year: date.year, month: date.month, day: date.days });
    const struMinDate = {
        year: minDate.toJSDate().getFullYear(),
        month: minDate.toJSDate().getMonth() + 1,
        days: minDate.toJSDate().getDate(),
        _date: minDate
    };
    return struMinDate;
};
const plussDate = (date, days) => {
    let plusDate;
    if (!date)
        plusDate = luxon_1.DateTime.now().plus({ days });
    else
        plusDate = luxon_1.DateTime.fromObject({ year: date.year, month: date.month, day: date.days }).plus({ days });
    const struPlusDate = {
        year: plusDate.toJSDate().getFullYear(),
        month: plusDate.toJSDate().getMonth() + 1,
        days: plusDate.toJSDate().getDate(),
        _date: plusDate
    };
    return struPlusDate;
};
const validDate = (d) => {
    const date_d = new Date();
    if (d.year !== date_d.getFullYear() || !/[0-9]/g.test(d.year.toString()))
        throw new MidtransNodeError_1.default("Invalid year date");
    const month = date_d.getMonth() + 1;
    if (d.month > month || !/[0-9]/g.test(d.month.toString()))
        throw new MidtransNodeError_1.default("Invalid Month date");
    else if (!/[0-9]/g.test(d.days.toString()))
        throw new MidtransNodeError_1.default("Invalid days date");
};
function HistoryTransaction(isProduction, fromDate, toDate, token) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fromDate && !toDate) {
            fromDate = struDate;
            toDate = minusDate(struDate, 10);
        }
        else if (!fromDate)
            fromDate = minusDate(toDate, 10);
        else if (!toDate)
            toDate = plussDate(fromDate, 10);
        validDate(fromDate);
        validDate(toDate);
        if (!fromDate._date)
            fromDate._date = luxon_1.DateTime.fromObject({
                year: fromDate.year,
                month: fromDate.month,
                day: fromDate.days
            });
        else if (!toDate._date)
            toDate._date = luxon_1.DateTime.fromObject({
                year: toDate.year,
                month: toDate.month,
                day: toDate.days
            });
        // define iso time.
        const isoFromDate = fromDate._date.toISODate();
        const isoToDate = toDate._date.toISODate();
        try {
            const { data } = yield (0, IrisRequest_1.default)(isProduction, token).get("/statements", {
                data: {
                    from_date: isoFromDate,
                    to_date: isoToDate
                }
            });
            return data;
        }
        catch (e) {
            throw new MidtransNodeError_1.default(JSON.stringify(e.response.data));
        }
    });
}
exports.default = HistoryTransaction;
