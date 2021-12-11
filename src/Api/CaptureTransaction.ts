import { apiRequest } from '../Util/ApiRequest';
import type { ITransaction, ITransactionFail } from '../Interfaces';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Capture a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {number?} grossAmount Gross amount from a transaction
 * @param {string} token midtrans server key
 */
export async function captureTransaction(
	isProduction: boolean,
	orderID: string,
	grossAmount?: number,
	token?: string
): Promise<ITransaction | ITransactionFail | undefined> {
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
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
