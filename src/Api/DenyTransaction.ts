import type { ITransaction, ITransactionFail } from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Deny a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
export async function denyTransaction(
	isProduction: boolean,
	orderID: string,
	token: string
): Promise<ITransaction | ITransactionFail> {
	try {
		const { data }: { data: ITransaction | ITransactionFail } =
			await apiRequest(isProduction, 'v2', token).post(`/${orderID}/deny`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
