import { apiRequest } from '../../Util/ApiRequest';
import MidtransNodeError from '../../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Disable a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {string} token midtrans auth key
 */
export async function disableSubscription(
	isProduction: boolean,
	subscriptionId: string,
	token: string
): Promise<{ status_message: string } | undefined> {
	try {
		const { data }: { data: { status_message: string } } = await apiRequest(
			isProduction,
			'v1',
			token
		).post(`/subscriptions/${subscriptionId}/disable`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
