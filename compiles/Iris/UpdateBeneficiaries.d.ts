import type { IBeneficiaries, ISuccessBeneficiaries } from '../Interfaces';
/**
 * @description update beneficiaries.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} aliasName Beneficiaries alias name.
 * @param {IBeneficiaries} args update beneficiaries arguments.
 * @param {string} token midtrans server key
 */
export declare function updateBeneficiaries(isProduction: boolean, aliasName: string, args: IBeneficiaries, token: string): Promise<ISuccessBeneficiaries | undefined>;
