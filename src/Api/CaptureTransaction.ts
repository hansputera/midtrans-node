import { apiRequest } from '../Util/ApiRequest';
import type { ITransaction, ITransactionFail } from '../Interfaces';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Capture a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 * @param {number?} grossAmount Gross amount from a transaction
 */
export async function captureTransaction(
	isProduction: boolean,
	orderID: string,
	token: string,
	grossAmount?: number
): Promise<ITransaction | ITransactionFail> {
	const postBody: {
		transaction_id: string;
		gross_amount?: number;
	} = {
		transaction_id: orderID,
	};
	if (grossAmount) postBody.gross_amount = Math.floor(grossAmount);
	try {
		const { data }: { data: ITransaction | ITransactionFail } =
			await apiRequest(isProduction, 'v2', token).post('/capture', postBody);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
