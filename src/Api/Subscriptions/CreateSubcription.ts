import type {
	ICreateSubcription,
	ICreateSubcriptionResponse,
} from '../../Interfaces';
import { apiRequest } from '../../Util/ApiRequest';
import MidtransNodeError from '../../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Create a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {ICreateSubcription} args Create subscription args
 * @param {string} token midtrans server key
 */
export async function createSubscription(
	isProduction: boolean,
	args: ICreateSubcription,
	token: string
): Promise<ICreateSubcriptionResponse | undefined> {
	try {
		const { data }: { data: ICreateSubcriptionResponse } = await apiRequest(
			isProduction,
			'v1',
			token
		).post('/subscriptions', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
