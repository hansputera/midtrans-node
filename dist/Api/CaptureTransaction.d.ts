import type { ITransaction, ITransactionFail } from '../Interfaces';
/**
 * @description Capture a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans auth key
 * @param {number?} grossAmount Gross amount from a transaction
 */
export declare function captureTransaction(isProduction: boolean, orderID: string, token: string, grossAmount?: number): Promise<ITransaction | ITransactionFail>;
