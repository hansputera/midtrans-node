import type { ITransactionStatus, ITransactionFail } from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Get a status of transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
export async function statusTransaction(
	isProduction: boolean,
	orderID: string,
	token: string
): Promise<ITransactionStatus | ITransactionFail | undefined> {
	try {
		const { data }: { data: ITransactionStatus | ITransactionFail } =
			await ApiRequest(isProduction, 'v2', token).get(`/${orderID}/status`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
