import type { BeneficiaryBank } from '../Interfaces';
/**
 * @description Get beneficiary banks.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 */
export declare function beneficiaryBanks(isProduction: boolean, token: string): Promise<BeneficiaryBank[] | undefined>;
