import type { ITransaction, ITransactionFail } from '../Interfaces';
/**
 * @description Capture a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {number?} grossAmount Gross amount from a transaction
 * @param {string} token midtrans server key
 */
export declare function captureTransaction(isProduction: boolean, orderID: string, grossAmount?: number, token?: string): Promise<ITransaction | ITransactionFail | undefined>;
