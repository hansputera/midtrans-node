import type { IPayout } from '../Interfaces/Payouts';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Get payout details
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} refNo Payout reference number.
 * @param {string} token midtrans server key
 */
export async function getPayoutDetails(
	isProduction: boolean,
	refNo: string,
	token: string
): Promise<IPayout | undefined> {
	try {
		const { data }: { data: IPayout } = await irisRequest(
			isProduction,
			token
		).get(`/payouts/${refNo}`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
