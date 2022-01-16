import type { IStatementDate, IStatementResult } from '../Interfaces';
/**
 * @description Get a history transaction by date.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 * @param {IStatementDate?} fromDate date to start viewing transaction history.
 * @param {IStatementDate?} toDate the last date to get the transaction history.
 */
export declare function historyTransaction(
	isProduction: boolean,
	token: string,
	fromDate?: IStatementDate,
	toDate?: IStatementDate
): Promise<IStatementResult[]>;
