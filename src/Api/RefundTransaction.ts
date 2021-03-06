import type {
	IRefundObj,
	IRefundObjRequest,
	ITransactionFail,
} from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Refund a paid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} orderID Transaction order id
 * @param {IRefundObjRequest} args refund transaction arguments
 * @param {string} token midtrans server key
 */
export async function refundTransaction(
	isProduction: boolean,
	orderID: string,
	args: IRefundObjRequest,
	token: string
): Promise<IRefundObj | ITransactionFail> {
	try {
		const { data }: { data: IRefundObj | ITransactionFail } = await apiRequest(
			isProduction,
			'v2',
			token
		).post(`/${orderID}/refund`, args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
