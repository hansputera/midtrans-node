import type { IUpdateSubcription, ISubcription } from '../../Interfaces';
import { apiRequest } from '../../Util/ApiRequest';
import MidtransNodeError from '../../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

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
		const { data }: { data: ISubcription } = await apiRequest(
			isProduction,
			'v1',
			token
		).patch(`/subscriptions/${subscriptionId}`, args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
