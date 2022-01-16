import type {
	IPayoutApproveRequest,
	IPayoutSuccessAct,
} from '../Interfaces/Payouts';
/**
 * @description Approve a payouts
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IPayoutApproveRequest} args Payout approve request arguments.
 * @param {string} token midtrans server key
 */
export declare function approvePayouts(
	isProduction: boolean,
	args: IPayoutApproveRequest,
	token: string
): Promise<IPayoutSuccessAct | undefined>;
