import type { IPointInquiry } from '../Interfaces';
/**
 * @description Get point inquiry.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} tokenId A token id
 * @param {?number} grossAmount Gross amount
 * @param {string} token midtrans server key
 */
export declare function pointInquiry(isProduction: boolean, tokenId: string, grossAmount?: number, token?: string): Promise<IPointInquiry | undefined>;
