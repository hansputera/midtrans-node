import type { IRefundObj, ITransactionFail } from '../Interfaces';
/**
 * @description Direct refund a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
export declare function directRefundTransaction(
	isProduction: boolean,
	orderID: string,
	token: string
): Promise<IRefundObj | ITransactionFail>;
