import type { IBeneficiaries, ISuccessBeneficiaries } from '../Interfaces';
/**
 * @description Create beneficiaries.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IBeneficiaries} args create beneficiaries arguments.
 * @param {string} token midtrans server key
 */
export declare function createBeneficiaries(isProduction: boolean, args: IBeneficiaries, token: string): Promise<ISuccessBeneficiaries | undefined>;
