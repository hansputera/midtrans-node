import type { IStatementDate, IStatementResult } from "../Interfaces";
import { DateTime } from "luxon";
import IrisRequest from "../Util/IrisRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

const date = new Date();
const struDate: IStatementDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    days: date.getDate(),
    _date: DateTime.now()
};

const minusDate = (date?: IStatementDate, days?: number) => {
    let minDate: DateTime | undefined;
    if (!date) minDate = DateTime.now().minus({ days });
    else minDate = DateTime.fromObject({ year: date.year, month: date.month, day: date.days });

    const struMinDate: IStatementDate = {
        year: minDate.toJSDate().getFullYear(),
        month: minDate.toJSDate().getMonth() + 1,
        days: minDate.toJSDate().getDate(),
        _date: minDate
    };
    return struMinDate;
};

const plussDate = (date?: IStatementDate, days?: number) => {
    let plusDate: DateTime | undefined;
    if (!date) plusDate = DateTime.now().plus({ days });
    else plusDate = DateTime.fromObject({ year: date.year, month: date.month, day: date.days }).plus({ days });
    const struPlusDate: IStatementDate = {
        year: plusDate.toJSDate().getFullYear(),
        month: plusDate.toJSDate().getMonth() + 1,
        days: plusDate.toJSDate().getDate(),
        _date: plusDate
    };
    return struPlusDate;
};

const validDate = (d: IStatementDate) =>
{
    const date_d = new Date();
    if (d.year !== date_d.getFullYear() || !/[0-9]/g.test(d.year.toString())) throw new MidtransNodeError(
        "Invalid year date"
    );
    const month = date_d.getMonth() + 1;
    if (d.month > month || !/[0-9]/g.test(d.month.toString())) throw new MidtransNodeError("Invalid Month date");
    else if (!/[0-9]/g.test(d.days.toString())) throw new MidtransNodeError("Invalid days date");
};

export default async function HistoryTransaction(isProduction: boolean, fromDate?: IStatementDate, toDate?: IStatementDate, token?: string): Promise<IStatementResult[] | undefined>
{
    if (!fromDate && !toDate) {
        fromDate = struDate;
        toDate = minusDate(struDate, 10);
    }
    else if (!fromDate) fromDate = minusDate(toDate, 10);
    else if (!toDate) toDate = plussDate(fromDate, 10);
    validDate(fromDate);
    validDate(toDate);
    

    if (!fromDate._date) fromDate._date = DateTime.fromObject({
        year: fromDate.year,
        month: fromDate.month,
        day: fromDate.days
    });
    else if (!toDate._date) toDate._date = DateTime.fromObject({
        year: toDate.year,
        month: toDate.month,
        day: toDate.days
    });

    // define iso time.
    const isoFromDate = fromDate._date.toISODate();
    const isoToDate = toDate._date.toISODate();
    try {
        const { data }:{ data: IStatementResult[]; } = await IrisRequest(isProduction, token).get("/statements", {
            data: {
                from_date: isoFromDate,
                to_date: isoToDate
            }
        });
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}