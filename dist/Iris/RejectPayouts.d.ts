import type { IPayoutRejectRequest, IPayoutSuccessAct } from '../Interfaces/Payouts';
/**
 * @description reject payouts.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IPayoutRejectRequest} args Reject payouts arguments.
 * @param {string} token midtrans server key
 */
export declare function rejectPayouts(isProduction: boolean, args: IPayoutRejectRequest, token: string): Promise<IPayoutSuccessAct | undefined>;
