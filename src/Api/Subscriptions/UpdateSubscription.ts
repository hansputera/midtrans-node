import type { IUpdateSubcription, ISubcription } from '../../Interfaces';
import ApiRequest from '../../Util/ApiRequest';
import MidtransNodeError from '../../Util/MidtransNodeError';

/**
 * @description Update a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {IUpdateSubcription} args update subscription arguments
 * @param {token} token midtrans server key
 */
export async function updateSubscription(
	isProduction: boolean,
	subscriptionId: string,
	args: IUpdateSubcription,
	token: string
): Promise<ISubcription | undefined> {
	try {
		const { data }: { data: ISubcription } = await ApiRequest(
			isProduction,
			'v1',
			token
		).patch(`/subscriptions/${subscriptionId}`, args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
