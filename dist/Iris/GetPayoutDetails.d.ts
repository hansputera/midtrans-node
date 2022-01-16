import type { IPayout } from '../Interfaces/Payouts';
/**
 * @description Get payout details
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} refNo Payout reference number.
 * @param {string} token midtrans server key
 */
export declare function getPayoutDetails(
	isProduction: boolean,
	refNo: string,
	token: string
): Promise<IPayout | undefined>;
