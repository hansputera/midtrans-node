import type { IPointInquiry } from '../Interfaces';
/**
 * @description Get point inquiry.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} tokenId A token id
 * @param {string} token midtrans server key
 * @param {?number} grossAmount Gross amount
 */
export declare function pointInquiry(
	isProduction: boolean,
	tokenId: string,
	token: string,
	grossAmount?: number
): Promise<IPointInquiry | undefined>;
