import type { ITransaction, ITransactionFail } from '../Interfaces';
/**
 * @description Approve an unpaid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans auth key
 */
export declare function approveTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransaction | ITransactionFail>;
