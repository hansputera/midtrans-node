import type {
	IPayoutRequest,
	IPayoutCreateResponse,
} from '../Interfaces/Payouts';
/**
 * @description Create payouts
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IPayoutRequest} args create payouts arguments.
 * @param {string} token midtrans server key
 */
export declare function createPayouts(
	isProduction: boolean,
	args: IPayoutRequest,
	token: string
): Promise<IPayoutCreateResponse | undefined>;
