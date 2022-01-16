import type { IRefundObj, ITransactionFail } from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Direct refund a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {string} token midtrans server key
 */
export async function directRefundTransaction(
	isProduction: boolean,
	orderID: string,
	token: string
): Promise<IRefundObj | ITransactionFail> {
	try {
		const { data }: { data: IRefundObj | ITransactionFail } = await apiRequest(
			isProduction,
			'v2',
			token
		).post(`/${orderID}/refund/online/direct`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
