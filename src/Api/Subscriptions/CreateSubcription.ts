import type {
	ICreateSubcription,
	ICreateSubcriptionResponse,
} from '../../Interfaces';
import ApiRequest from '../../Util/ApiRequest';
import MidtransNodeError from '../../Util/MidtransNodeError';

/**
 * @description Create a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {ICreateSubcription} args Create subscription args
 * @param {string} token Midtrans server key
 */
export async function createSubscription(
	isProduction: boolean,
	args: ICreateSubcription,
	token: string
): Promise<ICreateSubcriptionResponse | undefined> {
	try {
		const { data }: { data: ICreateSubcriptionResponse } = await ApiRequest(
			isProduction,
			'v1',
			token
		).post('/subscriptions', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
