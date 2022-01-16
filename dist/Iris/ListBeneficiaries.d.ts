import type { IBeneficiaries } from '../Interfaces';
/**
 * @description get beneficiaries list.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {?number} limit how much data you want to retrieve?
 * @param {string} token midtrans server key
 */
export declare function listBeneficiaries(
	isProduction: boolean,
	limit: number | undefined,
	token: string
): Promise<IBeneficiaries[] | undefined>;
