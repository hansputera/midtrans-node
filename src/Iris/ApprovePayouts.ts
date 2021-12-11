import type {
	IPayoutApproveRequest,
	IPayoutSuccessAct,
} from '../Interfaces/Payouts';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Approve a payouts
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IPayoutApproveRequest} args Payout approve request arguments.
 * @param {string} token midtrans server key
 */
export async function approvePayouts(
	isProduction: boolean,
	args: IPayoutApproveRequest,
	token: string
): Promise<IPayoutSuccessAct | undefined> {
	try {
		const { data }: { data: IPayoutSuccessAct } = await irisRequest(
			isProduction,
			token
		).post('/payouts/approve', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
