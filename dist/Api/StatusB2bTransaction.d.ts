import type { ITransaction } from '../Interfaces';
/**
 * @description Gets statusb2b from a transaction.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {?number} page a page.
 * @param {?number} perPage how much data per page.
 * @param {string} token midtrans server key
 */
export declare function statusB2bTransaction(
	isProduction: boolean,
	orderID: string,
	page: number | undefined,
	perPage: number | undefined,
	token: string
): Promise<
	| {
			status_code: string;
			status_message: string;
			transactions: ITransaction[];
	  }
	| undefined
>;
