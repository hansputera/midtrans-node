import type { ITransaction, ITransactionFail } from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Canceling an unpaid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param  {string} token Midtrans auth key
 */
export async function cancelTransaction(
	isProduction: boolean,
	orderID: string,
	token: string
): Promise<ITransaction | ITransactionFail> {
	try {
		const { data }: { data: ITransaction | ITransactionFail } =
			await apiRequest(isProduction, 'v2', token).post(`/${orderID}/cancel`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
