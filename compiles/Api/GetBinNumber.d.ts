import type { BinApiResponse } from '../Interfaces';
/**
 * @description Get a bin number details
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {number} binNumber A bin number
 * @param {string} token midtrans server key
 */
export declare function getBinNumber(isProduction: boolean, binNumber: number, token: string): Promise<BinApiResponse | undefined>;
