import type { ISubcription } from '../../Interfaces';
import { apiRequest } from '../../Util/ApiRequest';
import MidtransNodeError from '../../Util/MidtransNodeError';

/**
 * @description Get a subscription detail
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {token} token midtrans server key
 */
export async function getSubscription(
	isProduction: boolean,
	subscriptionId: string,
	token: string
): Promise<ISubcription | undefined> {
	try {
		const { data }: { data: ISubcription } = await apiRequest(
			isProduction,
			'v1',
			token
		).get(`/subscriptions/${subscriptionId}`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
