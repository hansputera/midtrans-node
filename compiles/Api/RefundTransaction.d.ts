import type { IRefundObj, IRefundObjRequest, ITransactionFail } from '../Interfaces';
/**
 * @description Refund a paid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {IRefundObjRequest} args refund transaction arguments
 * @param {string} token midtrans server key
 */
export declare function refundTransaction(isProduction: boolean, orderID: string, args: IRefundObjRequest, token: string): Promise<IRefundObj | ITransactionFail | undefined>;
