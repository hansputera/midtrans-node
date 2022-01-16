import type { IPayAccountUnBind } from '../Interfaces';
/**
 * @description Unbind a pay account.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} accountID Pay Account ID
 * @param {string} token midtrans server key
 */
export declare function unbindPayAccount(
	isProduction: boolean,
	accountID: string,
	token: string
): Promise<IPayAccountUnBind | undefined>;
