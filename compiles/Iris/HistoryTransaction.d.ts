import type { IStatementDate, IStatementResult } from '../Interfaces';
/**
 * @description Get a history transaction by date.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IStatementDate?} fromDate date to start viewing transaction history.
 * @param {IStatementDate?} toDate the last date to get the transaction history.
 * @param {string} token midtrans server key
 */
export declare function historyTransaction(isProduction: boolean, fromDate?: IStatementDate, toDate?: IStatementDate, token?: string): Promise<IStatementResult[] | undefined>;
