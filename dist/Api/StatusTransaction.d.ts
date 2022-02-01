import type { ITransactionStatus, ITransactionFail } from '../Interfaces';
/**
 * @description Get a status of transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
export declare function statusTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransactionStatus | ITransactionFail>;
