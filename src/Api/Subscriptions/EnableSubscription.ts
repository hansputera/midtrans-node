import ApiRequest from '../../Util/ApiRequest';
import MidtransNodeError from '../../Util/MidtransNodeError';

/**
 * @description Enable a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {token} token midtrans server key
 */
export async function enableSubscription(
	isProduction: boolean,
	subscriptionId: string,
	token: string
): Promise<{ status_message: string } | undefined> {
	try {
		const { data }: { data: { status_message: string } } = await ApiRequest(
			isProduction,
			'v2',
			token
		).post(`/subscriptions/${subscriptionId}/enable`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
