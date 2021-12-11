import type { ITransaction, ITransactionFail } from '../Interfaces';
/**
 * @description Canceling an unpaid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
export declare function cancelTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransaction | ITransactionFail | undefined>;
