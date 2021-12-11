import type { IChargeTransactionArgs, IChargeTransactionResult } from '../Interfaces';
/**
 * @description Charge an unpaid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IChargeTransactionArgs} args Charge transaction arguments
 * @param {string} token midtrans server key
 */
export declare function chargeTransaction(isProduction: boolean, args: IChargeTransactionArgs, token: string): Promise<IChargeTransactionResult>;
