import type { IPayAccount } from '../Interfaces';
/**
 * @description Get pay account details
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} accountID Pay Account ID
 * @param {string} token midtrans server key
 */
export declare function getPayAccount(
	isProduction: boolean,
	accountID: string,
	token: string
): Promise<IPayAccount | undefined>;
