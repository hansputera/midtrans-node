import { ITopupAggreratorChannel } from '../Interfaces';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Get topup channels
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 */
export async function topupChannels(
	isProduction: boolean,
	token: string
): Promise<ITopupAggreratorChannel[] | undefined> {
	try {
		const { data }: { data: ITopupAggreratorChannel[] } = await irisRequest(
			isProduction,
			token
		).get('/channels');
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
