import type { IPayout } from '../Interfaces/Payouts';
import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

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
		const { data }: { data: IPayout } = await IrisRequest(
			isProduction,
			token
		).get(`/payouts/${refNo}`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
