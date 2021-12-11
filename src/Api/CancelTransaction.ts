import type { ITransaction, ITransactionFail } from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Canceling an unpaid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
export async function cancelTransaction(
	isProduction: boolean,
	orderID: string,
	token: string
): Promise<ITransaction | ITransactionFail | undefined> {
	try {
		const { data }: { data: ITransaction | ITransactionFail } =
			await ApiRequest(isProduction, 'v2', token).post(`/${orderID}/cancel`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
