import type { BankAccount } from '../Interfaces';
/**
 * @description get bank account list
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 */
export declare function bankAccounts(
	isProduction: boolean,
	token: string
): Promise<BankAccount[] | undefined>;
