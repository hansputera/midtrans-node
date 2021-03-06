import type { IPayAccountUnBind } from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Unbind a pay account.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} accountID Pay Account ID
 * @param {string} token midtrans server key
 */
export async function unbindPayAccount(
	isProduction: boolean,
	accountID: string,
	token: string
): Promise<IPayAccountUnBind | undefined> {
	try {
		const { data }: { data: IPayAccountUnBind } = await apiRequest(
			isProduction,
			'v2',
			token
		).post(`/pay/account/${accountID}/unbind`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
