import type { ITransaction } from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Gets statusb2b from a transaction.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {?number} page a page.
 * @param {?number} perPage how much data per page.
 * @param {string} token midtrans server key
 */
export async function statusB2bTransaction(
	isProduction: boolean,
	orderID: string,
	page: number | undefined = 0,
	perPage: number | undefined = 10,
	token: string
): Promise<
	| {
			status_code: string;
			status_message: string;
			transactions: ITransaction[];
	  }
	| undefined
> {
	try {
		const {
			data,
		}: {
			data: {
				status_code: string;
				status_message: string;
				transactions: ITransaction[];
			};
		} = await ApiRequest(isProduction, 'v2', token).get(
			`/${orderID}/status/b2b?page=${page}&per_page=${perPage}`
		);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
