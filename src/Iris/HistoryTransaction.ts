import { DateTime } from 'luxon';
import type { IStatementDate, IStatementResult } from '../Interfaces';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

const minusDate = (date?: IStatementDate, days?: number) => {
	let minDate: DateTime | undefined;
	if (!date) minDate = DateTime.now().minus({ days });
	else {
		minDate = DateTime.fromObject({
			year: date.year,
			month: date.month,
			day: date.days,
		});
	}

	const struMinDate: IStatementDate = {
		year: minDate.toJSDate().getFullYear(),
		month: minDate.toJSDate().getMonth() + 1,
		days: minDate.toJSDate().getDate(),
		_date: minDate,
	};
	return struMinDate;
};

const plussDate = (date?: IStatementDate, days?: number) => {
	let plusDate: DateTime | undefined;
	if (!date) plusDate = DateTime.now().plus({ days });
	else {
		plusDate = DateTime.fromObject({
			year: date.year,
			month: date.month,
			day: date.days,
		}).plus({ days });
	}
	const struPlusDate: IStatementDate = {
		year: plusDate.toJSDate().getFullYear(),
		month: plusDate.toJSDate().getMonth() + 1,
		days: plusDate.toJSDate().getDate(),
		_date: plusDate,
	};
	return struPlusDate;
};

const validDate = (d: IStatementDate) => {
	const dateD = new Date();
	if (d.year !== dateD.getFullYear() || !/[0-9]/g.test(d.year.toString())) {
		throw new MidtransNodeError('Invalid year date');
	}
	const month = dateD.getMonth() + 1;
	if (d.month > month || !/[0-9]/g.test(d.month.toString()))
		throw new MidtransNodeError('Invalid Month date');
	else if (!/[0-9]/g.test(d.days.toString()))
		throw new MidtransNodeError('Invalid days date');
};

/**
 * @description Get a history transaction by date.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 * @param {IStatementDate?} fromDate date to start viewing transaction history.
 * @param {IStatementDate?} toDate the last date to get the transaction history.
 */
export async function historyTransaction(
	isProduction: boolean,
	token: string,
	fromDate?: IStatementDate,
	toDate?: IStatementDate
): Promise<IStatementResult[]> {
	const date = new Date();
	const struDate: IStatementDate = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		days: date.getDate(),
		_date: DateTime.now(),
	};

	if (!fromDate && !toDate) {
		fromDate = struDate;
		toDate = minusDate(struDate, 10);
	} else if (!fromDate) {
		fromDate = minusDate(toDate, 10);
	} else if (!toDate) {
		toDate = plussDate(fromDate, 10);
	}

	validDate(fromDate);
	validDate(toDate!);

	if (!fromDate._date) {
		fromDate._date = DateTime.fromObject({
			year: fromDate.year,
			month: fromDate.month,
			day: fromDate.days,
		});
	} else if (!toDate?._date) {
		toDate!._date = DateTime.fromObject({
			year: toDate?.year,
			month: toDate?.month,
			day: toDate?.days,
		});
	}

	// define iso time.
	const isoFromDate = fromDate._date.toISODate();
	const isoToDate = toDate?._date?.toISODate();
	try {
		const { data }: { data: IStatementResult[] } = await irisRequest(
			isProduction,
			token
		).get('/statements', {
			data: {
				from_date: isoFromDate,
				to_date: isoToDate,
			},
		});
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
