import type {
	IPayoutRequest,
	IPayoutCreateResponse,
} from '../Interfaces/Payouts';
import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Create payouts
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IPayoutRequest} args create payouts arguments.
 * @param {string} token midtrans server key
 */
export async function createPayouts(
	isProduction: boolean,
	args: IPayoutRequest,
	token: string
): Promise<IPayoutCreateResponse | undefined> {
	try {
		const { data }: { data: IPayoutCreateResponse } = await IrisRequest(
			isProduction,
			token
		).post('/payouts', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
