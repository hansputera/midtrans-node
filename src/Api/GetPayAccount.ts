import type { IPayAccount } from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Get pay account details
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} accountID Pay Account ID
 * @param {string} token midtrans server key
 */
export async function getPayAccount(
	isProduction: boolean,
	accountID: string,
	token: string
): Promise<IPayAccount | undefined> {
	try {
		const { data }: { data: IPayAccount } = await apiRequest(
			isProduction,
			'v2',
			token
		).get(`/pay/account/${accountID}`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
